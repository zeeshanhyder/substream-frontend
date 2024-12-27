import { RefObject, useState, useEffect } from 'react'
import { convertSecsToMins } from './utils'

export enum MediaPlayerState {
    PLAYING,
    PAUSED,
    STOPPED,
    REWINDING,
    FORWARDING,
    BUFFERING,
}

export enum MediaControlsVisibility {
    VISIBLE,
    HIDDEN,
}
export type MediaControlProps = {
    mediaControls: ReturnType<typeof useMediaPlayerControls>
}

export type MediaButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    MediaControlProps

export const useMediaPlayerControls = (
    mediaPlayer: RefObject<HTMLMediaElement | null>,
    startTime?: number
) => {
    const [playState, setPlayState] = useState(MediaPlayerState.STOPPED)
    const [volume, setVolume] = useState(1)
    const [lastVolume, setLastVolume] = useState<number | undefined>()
    const [subtitlesVisible, setSubtitlesVisibility] = useState(false)
    const [isMuted, setMuteValue] = useState(false)
    const [mediaControlsVisibility, setMediaControlsVisibility] = useState(
        MediaControlsVisibility.VISIBLE
    )
    const [currentRuntime, setCurrentRuntime] = useState('00:00')
    const [remainingRuntime, setRemainingRuntime] = useState('00:00')
    const [isResumable] = useState<boolean>(() => !!startTime && startTime > 0)
    const [timeout, setTimeoutValue] = useState<NodeJS.Timeout | undefined>(
        undefined
    )
    const [runtimeTracker, setRunTimeTracker] = useState<
        NodeJS.Timeout | undefined
    >(undefined)

    useEffect(() => {
        if (playState === MediaPlayerState.PLAYING) {
            if (!runtimeTracker) {
                setRunTimeTracker(
                    setInterval(() => {
                        const currentRuntime =
                            convertSecsToMins(getCurrentPlayTime())
                        setCurrentRuntime(currentRuntime)
                        const remainingRuntime = convertSecsToMins(
                            getRemainingPlayTime()
                        )
                        setRemainingRuntime(remainingRuntime)
                    }, 1000)
                )
            }
        }
        return function () {
            clearInterval(runtimeTracker)
            setRunTimeTracker(undefined)
        }
    }, [playState])

    useEffect(() => {
        const setMediaBuffering = () =>
            updateMediaState(MediaPlayerState.BUFFERING)
        const setMediaPlaying = () => updateMediaState(MediaPlayerState.PLAYING)
        const setMediaPaused = () => () =>
            updateMediaState(MediaPlayerState.PAUSED)

        mediaPlayer.current?.addEventListener('waiting', setMediaBuffering)
        mediaPlayer.current?.addEventListener('playing', setMediaPlaying)
        mediaPlayer.current?.addEventListener('pause', setMediaPaused)

        if (playState === MediaPlayerState.STOPPED && startTime) {
            if (mediaPlayer.current) {
                mediaPlayer.current.currentTime = startTime
            }
        }

        return function () {
            mediaPlayer.current?.removeEventListener(
                'waiting',
                setMediaBuffering
            )
            mediaPlayer.current?.removeEventListener('play', setMediaPlaying)
            mediaPlayer.current?.removeEventListener('pause', setMediaPaused)
        }
    }, [])

    const updateMediaState = (state: MediaPlayerState) => {
        setPlayState(state)
    }

    const play = () => {
        if (mediaPlayer.current === null) return
        mediaPlayer.current.play()
        setPlayState(MediaPlayerState.PLAYING)
    }

    const pause = () => {
        if (mediaPlayer.current === null) return
        mediaPlayer.current.pause()
        setPlayState(MediaPlayerState.PAUSED)
    }

    const toggleMute = () => {
        if (mediaPlayer.current === null) return
        if (isMuted) {
            setMuteValue(false)
            setVolume(lastVolume ?? 1)
            mediaPlayer.current.volume = lastVolume ?? 1
        } else {
            setMuteValue(true)
            setLastVolume(volume)
            setVolume(0)
            mediaPlayer.current.volume = 0
        }
    }

    const toggleMediaState = () => {
        if (playState === MediaPlayerState.PLAYING) {
            pause()
        } else {
            play()
        }
    }

    const isFullScreen = () => {
        if (document.fullscreenElement) {
            return true
        }
        return false
    }

    const toggleSubtitles = () => {
        if (mediaPlayer.current === null) return
        if (subtitlesVisible) {
            mediaPlayer.current.textTracks[0].mode = 'hidden'
            setSubtitlesVisibility(false)
            return
        }
        mediaPlayer.current.textTracks[0].mode = 'showing'
        setSubtitlesVisibility(true)
    }

    const toggleFullScreen = () => {
        if (mediaPlayer.current === null) return
        const targetElement = mediaPlayer.current.parentElement
        if (document.fullscreenElement) {
            document.exitFullscreen()
        } else {
            if (targetElement?.requestFullscreen) {
                targetElement.requestFullscreen()
            } else {
                if (mediaPlayer.current.webkitRequestFullscreen) {
                    mediaPlayer.current.webkitRequestFullscreen()
                }
            }
        }
    }

    const getPlayDuration = () => {
        if (mediaPlayer.current === null) return 0
        return mediaPlayer.current.duration
    }

    const getRemainingPlayTime = () => {
        if (mediaPlayer.current === null) return 0
        const remainingDuration =
            mediaPlayer.current.duration - mediaPlayer.current.currentTime
        return remainingDuration < 0 ? 0 : remainingDuration
    }

    const getCurrentPlayTime = () => {
        if (mediaPlayer.current === null) return 0
        return mediaPlayer.current.currentTime
    }

    const seekToTime = (time: number) => {
        if (mediaPlayer.current === null) return
        mediaPlayer.current.currentTime = time
    }

    const hideControls = () => {
        clearTimeout(timeout)
        setTimeoutValue(undefined)
        if (
            playState === MediaPlayerState.PAUSED ||
            playState === MediaPlayerState.STOPPED
        ) {
            return
        }
        setMediaControlsVisibility(MediaControlsVisibility.HIDDEN)
    }

    const showControls = () => {
        setMediaControlsVisibility(MediaControlsVisibility.VISIBLE)
        if (playState === MediaPlayerState.PLAYING) {
            if (timeout !== undefined) {
                clearTimeout(timeout)
                setTimeoutValue(undefined)
            }
            setTimeoutValue(setTimeout(hideControls, 4000))
        }
    }

    return {
        isFullScreen,
        isMuted,
        isResumable,
        playState,
        play,
        pause,
        toggleMediaState,
        toggleFullScreen,
        getPlayDuration,
        getCurrentPlayTime,
        getRemainingPlayTime,
        seekToTime,
        showControls,
        hideControls,
        mediaControlsVisibility,
        currentRuntime,
        remainingRuntime,
        toggleMute,
        toggleSubtitles,
        subtitlesVisible,
    }
}

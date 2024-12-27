import { FastForward } from '@phosphor-icons/react'
import {
    MediaButtonProps,
    MediaPlayerState,
} from '../use-media-player-controls'

export default function MediaFastForwardButton({
    mediaControls,
}: MediaButtonProps) {
    const { playState } = mediaControls

    if (playState === MediaPlayerState.STOPPED) {
        return undefined
    }

    const handleFastForward = () => {
        const currentTime = mediaControls.getCurrentPlayTime()
        const maxDuration = mediaControls.getPlayDuration()
        const nextTime = currentTime + 10
        if (nextTime > maxDuration) {
            mediaControls.seekToTime(maxDuration)
            return
        }
        mediaControls.seekToTime(nextTime)
    }
    return (
        <button aria-label="Fast Forward" onClick={handleFastForward}>
            <FastForward size={48} color="#fff" />
        </button>
    )
}

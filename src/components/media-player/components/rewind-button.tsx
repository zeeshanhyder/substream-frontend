import { Rewind } from '@phosphor-icons/react'
import {
    MediaButtonProps,
    MediaPlayerState,
} from '../use-media-player-controls'

export default function MediaRewindButton({ mediaControls }: MediaButtonProps) {
    const { playState } = mediaControls

    if (playState === MediaPlayerState.STOPPED) {
        return undefined
    }

    const handelRewind = () => {
        const currentTime = mediaControls.getCurrentPlayTime()
        const nextTime = currentTime - 10
        if (nextTime < 0) {
            mediaControls.seekToTime(0)
            return
        }
        mediaControls.seekToTime(nextTime)
    }

    return (
        <button aria-label="Rewind" onClick={handelRewind}>
            <Rewind size={48} color="#fff" />
        </button>
    )
}

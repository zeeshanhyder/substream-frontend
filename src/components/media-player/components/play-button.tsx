import { Pause, Play } from '@phosphor-icons/react'
import {
    MediaButtonProps,
    MediaPlayerState,
} from '../use-media-player-controls'
import { Spinner } from "@heroui/react"

export default function MediaPlayButton({
    mediaControls,
    onClick,
}: MediaButtonProps) {
    const { playState } = mediaControls
    const MediaChangeButton =
        playState === MediaPlayerState.PLAYING ? Pause : Play

    if (playState === MediaPlayerState.BUFFERING) {
        return (
            <Spinner
                className="mx-4"
                size="lg"
                color="primary"
                aria-label="Buffering"
            />
        )
    }
    return (
        <button
            style={{ margin: '0 32px' }}
            onClick={onClick}
            className="mx-4"
            aria-label={
                playState === MediaPlayerState.PLAYING ? 'Pause' : 'Play'
            }
        >
            <MediaChangeButton size={48} color="#fff" />
        </button>
    )
}

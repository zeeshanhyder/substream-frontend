import { ArrowsOutSimple } from '@phosphor-icons/react'
import { MediaButtonProps } from '../use-media-player-controls'

export default function MediaPlayerFullScreenButton({
    onClick,
}: MediaButtonProps) {
    return (
        <button
            className="px-3"
            onClick={onClick}
            aria-label="Toggle Fullscreen"
        >
            <ArrowsOutSimple size={32} color="#fff" />
        </button>
    )
}

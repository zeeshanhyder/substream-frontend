import { SpeakerSimpleNone, SpeakerSimpleHigh } from '@phosphor-icons/react'
import { MediaButtonProps } from '../use-media-player-controls'

export default function MediaPlayerVolumeButton({
    mediaControls,
    ...props
}: MediaButtonProps) {
    const { isMuted } = mediaControls

    const VolumeButton = isMuted ? SpeakerSimpleNone : SpeakerSimpleHigh

    return (
        <button {...props} className="px-3" aria-label="Toggle Subtitles">
            <VolumeButton size={32} color="#fff" />
        </button>
    )
}

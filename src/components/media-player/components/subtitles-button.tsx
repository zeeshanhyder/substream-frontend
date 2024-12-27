import { Subtitles, SubtitlesSlash } from '@phosphor-icons/react'
import { MediaButtonProps } from '../use-media-player-controls'

export default function MediaPlayerSubtitleButton({
    mediaControls,
}: MediaButtonProps) {
    const { subtitlesVisible, toggleSubtitles } = mediaControls
    const SubtitlesButton = subtitlesVisible ? Subtitles : SubtitlesSlash

    return (
        <button className="px-3" aria-label="Toggle Subtitles">
            <SubtitlesButton onClick={toggleSubtitles} size={32} color="#fff" />
        </button>
    )
}

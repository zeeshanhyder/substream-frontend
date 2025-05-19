'use client'
import { getMediaById } from '@/client-api/persona'
import { useQuery } from '@/client-api/utils/use-query'
import { useUserSessionStore } from '@/providers/user-session-provider'
import { getTmdbImg } from '@/utils/get-tmdb-img'
import { Button, Link } from '@heroui/react'
import {
    ArrowLeft,
    SpeakerSimpleHigh,
    SpeakerSimpleSlash,
} from '@phosphor-icons/react'
import { YoutubeScript } from './youtube-script'
import { useState } from 'react'
import { PlayNow } from '@/components/title/play-now'
import Episodes from './episodes'

export type TitleExperienceProps = {
    titleId: string
}

const RenderTitle = ({
    titleId,
    userId,
}: {
    titleId: string
    userId: string
}) => {
    const {
        data: title,
        loading,
        error,
    } = useQuery(() => getMediaById(userId, titleId))
    const [isMuted, setIsMuted] = useState(true)

    if (loading) {
        return <div>Loading...</div>
    }
    if (error || title === null) {
        return <div>Error</div>
    }

    const toggleMute = () => {
        setIsMuted((state) => {
            const muteState = !state
            if (isMuted) {
                window.player.unMute()
            } else {
                window.player.mute()
            }
            return muteState
        })
    }

    const backgroundImageId =
        title?.metadata?.stillPath ?? title?.metadata?.backdropImage
    const backgroundImageUrl = backgroundImageId
        ? `url('${getTmdbImg(backgroundImageId, 'original')}')`
        : ''

    const ytLink = title?.metadata?.trailerLink ?? ''
    const ytId = ytLink.split('v=')[1]

    const MuteToggleButton = isMuted ? SpeakerSimpleSlash : SpeakerSimpleHigh
    return (
        <div className="flex flex-col grow">
            <div className="h-[100vh] max-h-[100vh] overflow-hidden flex flex-col bg-black relative">
                <div
                    style={{
                        background:
                            'linear-gradient(99deg,rgba(0,0,0, 1) 30%, rgba(0,0,0, 0.75) 55%, rgba(0,0,0, 0.45) 67%, transparent 80%)',
                    }}
                    className="absolute top-0 left-0 w-full h-full z-9"
                />
                <div
                    id="player"
                    className="absolute top-0 left-0 w-full h-full flex z-5"
                    style={{ transform: 'scale(1.3)' }}
                />
                <div
                    id="backdrop-image"
                    className="absolute top-0 left-0 w-full h-full flex z-5"
                    style={{
                        backgroundColor: 'black',
                        backgroundImage: backgroundImageUrl,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        transition: 'opacity 1s ease-out',
                    }}
                />
                <div className="flex flex-col absolute z-10 w-full h-full">
                    <div className="min-h-[5rem] flex flex-row items-center px-6">
                        <Button
                            variant="light"
                            as={Link}
                            href="/library"
                            radius="full"
                        >
                            <ArrowLeft
                                size="24"
                                style={{ fill: 'var(--background)' }}
                            />
                        </Button>
                    </div>
                    <div className="flex flex-col grow px-[10vw] justify-center">
                        <PlayNow title={title} />
                    </div>
                    <div className="min-h-20 max-h-20 flex flex-row grow items-center">
                        <div className="flex grow"></div>
                        <div className="flex mx-10 cursor-pointer">
                            <MuteToggleButton
                                size="24"
                                id="mute-toggle-button"
                                style={{
                                    fill: 'var(--background)',
                                }}
                                onClick={toggleMute}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-[20vh] px-[10vw] pt-10">
                <Episodes title={title} />
            </div>
            <YoutubeScript videoId={ytId} />
        </div>
    )
}
export const TitleExperience = ({ titleId }: TitleExperienceProps) => {
    const userId = useUserSessionStore((store) => store.id)
    if (!userId) {
        return <div>Loading...</div>
    }

    return <RenderTitle titleId={titleId} userId={userId} />
}

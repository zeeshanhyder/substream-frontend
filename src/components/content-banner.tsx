import { ArrowLeft } from '@phosphor-icons/react'
import Sheet from './sheet'
import { useEffect, useState, useRef } from 'react'
import type { MediaControlProps } from './media-player/use-media-player-controls'
import Link from 'next/link'
import { Button } from '@heroui/react'

type MovieBannerProps = MediaControlProps & {
    src: string
    backLink: string
}

export default function ContentBanner({
    src,
    backLink,
    mediaControls,
}: MovieBannerProps) {
    const [hideOverlay, setOverlayHidden] = useState(false)
    const [fadeOut] = useState(false)
    const fadeOutTriggerTimer = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        startPlaying()
        return function () {
            if (fadeOutTriggerTimer.current) {
                clearTimeout(fadeOutTriggerTimer.current)
            }
        }
    }, [])

    const startPlaying = () => {
        setOverlayHidden(true)
        if (fadeOutTriggerTimer.current) {
            clearTimeout(fadeOutTriggerTimer.current)
        }
        mediaControls.play()
    }

    const rewatchMedia = () => {
        mediaControls.seekToTime(0)
        mediaControls.play()
    }

    return (
        <>
            <div
                className={`flex flex-col grow w-full movie-banner absolute w-full h-full z-30 ${hideOverlay ? 'hidden' : ''} ${fadeOut ? 'opacity-0' : ''} `}
            ></div>
            <div
                className={`flex flex-row grow w-full movie-banner-controls absolute w-full h-full z-40 align-center ${hideOverlay ? 'hidden' : ''} ${fadeOut ? 'opacity-0' : ''}`}
            >
                <div className="flex flex-col grow pl-5 pr-5 lg:pl-20 lg:max-w-[40%] bg-black">
                    <Sheet className="flex flex-col grow min-h-[33.3%]">
                        <div className="flex flex-row items-center mt-10">
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
                    </Sheet>
                </div>
                <div
                    className={`flex flex-col bg-black grow lg:max-w-[60%] lg:min-w-[60%] bg-cover movie-banner-overlay absolute w-full h-full z-20 ${hideOverlay ? 'hidden' : ''} ${fadeOut ? 'opacity-0' : ''}`}
                    style={{ backgroundImage: `url(${src})` }}
                >
                    <video
                        src={src}
                        autoPlay={true}
                        className="object-cover h-[100%]"
                    ></video>
                </div>
            </div>
        </>
    )
}

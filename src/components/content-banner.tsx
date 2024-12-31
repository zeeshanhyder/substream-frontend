import { Button, ButtonProps, Link as LinkButton } from '@nextui-org/react'
import {
    ArrowCounterClockwise,
    ArrowLeft,
    Eject,
    Play,
} from '@phosphor-icons/react'
import Sheet from './sheet'
import { useEffect, useState, useRef } from 'react'
import type { MediaControlProps } from './media-player/use-media-player-controls'
import Link from 'next/link'

type MovieBannerProps = MediaControlProps & {
    src: string
}

const StartMediaButton = ({
    mediaControls,
    ...props
}: ButtonProps & MediaControlProps) => {
    const { isResumable } = mediaControls

    const PlayButton = isResumable ? Eject : Play
    const text = isResumable ? 'Resume watching' : 'Start watching'
    return (
        <Button radius="sm" color="primary" {...props}>
            <PlayButton
                className={`${isResumable ? 'rotate-90' : ''}`}
                size={16}
                color="#000"
            />
            <span className="text-lg font-semibold color-black">{text}</span>
        </Button>
    )
}

const StartOverButton = ({
    mediaControls,
    ...props
}: ButtonProps & MediaControlProps) => {
    const { isResumable } = mediaControls

    if (!isResumable) {
        return null
    }

    return (
        <Button
            className="mt-3 xl:mt-0 xl:mx-3"
            radius="sm"
            color="secondary"
            {...props}
        >
            <ArrowCounterClockwise size={16} />
            <span className="text-lg font-semibold color-black">
                Watch from beginning
            </span>
        </Button>
    )
}

export default function ContentBanner({
    src,
    mediaControls,
}: MovieBannerProps) {
    const [hideOverlay, setOverlayHidden] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)
    const fadeOutTriggerTimer = useRef<NodeJS.Timeout | null>(null)
    const hideOverlayTriggerTimer = useRef<NodeJS.Timeout | null>(null)

    const startFadeOutChoreography = () => {
        fadeOutTriggerTimer.current = setTimeout(() => {
            mediaControls.play()
            setTimeout(() => {
                setFadeOut(true)
            }, 5000)
        }, 10000)
    }

    const startHideOverlayChoreography = () => {
        if (fadeOut) {
            hideOverlayTriggerTimer.current = setTimeout(() => {
                setOverlayHidden(true)
            }, 10000)
        }
    }

    useEffect(() => {
        //startFadeOutChoreography()
        return function () {
            if (fadeOutTriggerTimer.current) {
                clearTimeout(fadeOutTriggerTimer.current)
            }
        }
    }, [])

    useEffect(() => {
        startHideOverlayChoreography()
        return function () {
            if (hideOverlayTriggerTimer.current) {
                clearTimeout(hideOverlayTriggerTimer.current)
            }
        }
    }, [fadeOut])

    const startPlaying = () => {
        setOverlayHidden(true)
        if (fadeOutTriggerTimer.current) {
            clearTimeout(fadeOutTriggerTimer.current)
        }
        mediaControls.play()
    }

    const rewatchMedia = () => {
        mediaControls.seekToTime(0)
        startPlaying()
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
                            <Link href="/">
                                <ArrowLeft />
                            </Link>
                        </div>
                    </Sheet>
                    <Sheet className="flex flex-col grow min-h-[33.3%] justify-center">
                        <h3 className="text-4xl font-extrabold">
                            Big Buck Bunny
                        </h3>
                        <p className="text-lg pt-3 max-sm:hidden">
                            An enormous, fluffy, and utterly adorable rabbit is
                            heartlessly harassed by the ruthless, loud, bullying
                            gang of a flying squirrel, who is determined to
                            squash his happiness.
                        </p>
                        <div className="flex flex-col xl:flex-row pt-5">
                            <StartMediaButton
                                onPress={startPlaying}
                                mediaControls={mediaControls}
                            />
                            <StartOverButton
                                mediaControls={mediaControls}
                                onPress={rewatchMedia}
                            />
                        </div>
                    </Sheet>
                    <Sheet className="flex flex-col grow min-h-[33.3%]" />
                </div>
                <div
                    className={`flex flex-col bg-black grow lg:max-w-[60%] lg:min-w-[60%] bg-cover movie-banner-overlay absolute w-full h-full z-[20] ${hideOverlay ? 'hidden' : ''} ${fadeOut ? 'opacity-0' : ''}`}
                    style={{ backgroundImage: `url(${src})` }}
                >
                    <video
                        src={src}
                        autoPlay={true}
                        muted={true}
                        className="object-cover h-[100%]"
                    ></video>
                </div>
            </div>
        </>
    )
}

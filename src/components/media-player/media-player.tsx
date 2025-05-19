'use client'

import Hls from 'hls.js'
import Script from 'next/script'
import ContentBanner from '@/components/content-banner'
import { Ref, useRef } from 'react'
import { useMediaPlayerControls } from './use-media-player-controls'
import { MediaPlayerControls } from './media-player-controls'

type MediaPlayerProps = {
    src: string
    thumbnailSrc: string
    startTime?: number
    smartStream?: boolean
    title: string
    subtext: string
    type: string
    titleId: string
}

export default function MediaPlayer({
    src: mediaSource,
    thumbnailSrc,
    startTime,
    smartStream,
    title,
    subtext,
    type = 'Movie',
    titleId,
}: MediaPlayerProps) {
    const videoPlayerRef: Ref<HTMLVideoElement | null> = useRef(null)
    const mediaControls = useMediaPlayerControls(videoPlayerRef, startTime)

    const onReadyHandler = () => {
        if (videoPlayerRef.current === null) return

        if (
            videoPlayerRef.current.canPlayType('application/vnd.apple.mpegurl')
        ) {
            videoPlayerRef.current.src = mediaSource
        } else if (Hls.isSupported() && smartStream === true) {
            const hls = new Hls()
            hls.loadSource(mediaSource)
            hls.attachMedia(videoPlayerRef.current)
        } else {
            console.log('Smart stream not enabled for this video')
        }
    }

    return (
        <div className="relative flex flex-col grow min-[1024px]:min-h-[80%] min-[320px]:min-h-[50%] media-player z-40">
            <Script
                src="https://cdn.jsdelivr.net/npm/hls.js@1"
                onReady={onReadyHandler}
            ></Script>
            <div className="flex flex-col grow relative h-inherit w-inherit">
                <video
                    style={{ minWidth: '100%', minHeight: '100%' }}
                    className="absolute max-h-[100%] h-[100%] min-w-[100%]"
                    id="media-player"
                    ref={videoPlayerRef}
                    poster={thumbnailSrc}
                    src={mediaSource}
                    playsInline={true}
                    autoPlay={true}
                    crossOrigin="anonymous"
                    preload="metadata"
                ></video>
                <MediaPlayerControls
                    title={title}
                    subtext={subtext}
                    type={type}
                    mediaControls={mediaControls}
                    backLink={`/title/${titleId}`}
                />
            </div>
            <ContentBanner
                backLink={`/title/${titleId}`}
                mediaControls={mediaControls}
                src={thumbnailSrc}
            />
        </div>
    )
}

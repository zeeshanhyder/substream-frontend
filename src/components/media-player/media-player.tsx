'use client'

import Hls from 'hls.js'
import Script from 'next/script'
import { Ref, useRef } from 'react'
import { useMediaPlayerControls } from './use-media-player-controls'
import MovieBanner from '@/components/movie-banner'
import { MediaPlayerControls } from './media-player-controls'

type MediaPlayerProps = {
    src: string
    thumbnailSrc: string
    startTime?: number
}

export default function MediaPlayer({
    src: mediaSource,
    thumbnailSrc,
    startTime,
}: MediaPlayerProps) {
    const videoPlayerRef: Ref<HTMLVideoElement | null> = useRef(null)
    const mediaControls = useMediaPlayerControls(videoPlayerRef, startTime)

    const onReadyHandler = () => {
        if (videoPlayerRef.current === null) return

        if (
            videoPlayerRef.current.canPlayType('application/vnd.apple.mpegurl')
        ) {
            videoPlayerRef.current.src = mediaSource
        } else if (Hls.isSupported()) {
            const hls = new Hls()
            hls.loadSource(mediaSource)
            hls.attachMedia(videoPlayerRef.current)
        } else {
            console.error('HLS is not supported')
        }
    }

    return (
        <div className="relative flex flex-col grow min-[1024px]:min-h-[80%] min-[320px]:min-h-[50%] media-player">
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
                    crossOrigin="anonymous"
                    preload="metadata"
                >
                    <track
                        label="Subtitles"
                        kind="subtitles"
                        srcLang="en"
                        src="http://localhost:8080/subtitles.vtt"
                    ></track>
                </video>
                <MediaPlayerControls mediaControls={mediaControls} />
            </div>
            <MovieBanner mediaControls={mediaControls} src={thumbnailSrc} />
        </div>
    )
}

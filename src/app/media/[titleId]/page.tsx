'use client'

import Header from '@/components/header'
import MediaPlayer from '@/components/media-player'
import MovieCreditsSection from '@/components/movie-credits-section'
import Sheet from '@/components/sheet'
// https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8
function Media() {
    return (
        <Sheet className="flex flex-col grow relative z-10">
            <MediaPlayer
                src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
                thumbnailSrc="https://wiki.yoctoproject.org/wiki/images/a/a6/Big-buck-bunny_trailer.webm"
                startTime={90}
            />
            <Sheet className="flex flex-col grow min-h-[100px] px-20 mt-20">
                <MovieCreditsSection />
            </Sheet>
        </Sheet>
    )
}

export default Media

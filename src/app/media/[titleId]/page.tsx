'use client'
import ContentDetails from '@/components/content-details'
import MediaPlayer from '@/components/media-player'
import SimilarContentSection from '@/components/related-suggestions-section'
import SeasonsSection from '@/components/seasons-section'
import Sheet from '@/components/sheet'
// https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8
function Media() {
    return (
        <Sheet className="flex flex-col grow relative z-10">
            <MediaPlayer
                src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
                thumbnailSrc="https://wiki.yoctoproject.org/wiki/images/a/a6/Big-buck-bunny_trailer.webm"
            />
            <Sheet className="flex flex-row grow min-h-[100px] px-20 mt-10 border-box">
                <div className="flex grow flex-col max-w-[75%] min-w-[75%] mr-10 ">
                    <SeasonsSection />
                    <SimilarContentSection />
                </div>

                <div className="flex grow flex-col min-w-[25%] max-w-[25%]">
                    <ContentDetails />
                </div>
            </Sheet>
        </Sheet>
    )
}

export default Media

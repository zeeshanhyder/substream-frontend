import { WelcomeMessage } from '@/components/library/welcome-message'
import { ContinueWatching } from '@/components/library/continue-watching-carousel'
import { LibraryCarousel } from '@/components/library/library-carousel'
import { Backdrop } from '@/components/library/backdrop'
import { CurrentSelectedTitleProvider } from '@/components/library/selected-media-title'

export function LibraryExperience() {
    return (
        <CurrentSelectedTitleProvider>
            <div className="flex flex-col px-[10vw] pt-[10vmax] mb-5 relative">
                <Backdrop />
                <div className="flex flex-col">
                    <WelcomeMessage />

                    <div
                        className="flex flex-col relative z-10"
                        style={{
                            marginTop: 'calc(100vh - 66vh)',
                        }}
                    >
                        <ContinueWatching />
                        <LibraryCarousel />
                    </div>
                </div>
            </div>
        </CurrentSelectedTitleProvider>
    )
}

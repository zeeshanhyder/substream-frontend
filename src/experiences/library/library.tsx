import { WelcomeMessage } from './welcome-message'
import { ContinueWatching } from './continue-watching-carousel'
import { LibraryCarousel } from './library-carousel'
import { Backdrop } from './backdrop'
import { CurrentSelectedTitleProvider } from './selected-media-title'

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
                            top: 'calc(100vh - 41%)',
                        }}
                    >
                        <ContinueWatching />
                        <LibraryCarousel />
                        <LibraryCarousel />
                        <LibraryCarousel />
                    </div>
                </div>
            </div>
        </CurrentSelectedTitleProvider>
    )
}

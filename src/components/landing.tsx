'use client'

import { MediaContent } from '@/api'
import ContentGrid from './content-grid'
import ContentList from './content-list'
import Hero from './hero'

export default function Landing({
    newlyReleased,
    myLibrary,
}: {
    newlyReleased: MediaContent
    myLibrary: MediaContent
}) {
    return (
        <div className="flex flex-col overflow-x-hidden sticky">
            <Hero featuredContent={newlyReleased} />
            <div className="w-[100%] overflow-hidden sm:p-20 sm:pt-0 relative sm:mt-[-30vh] xl:mt-[-20vh] z-20 collection">
                {/* <ContuinueWatching /> */}
                <ContentList title={'Newly Added'} content={newlyReleased} />
                <ContentGrid
                    title={'Your Library'}
                    content={[
                        ...myLibrary,
                        ...myLibrary,
                        ...myLibrary,
                        ...myLibrary,
                    ]}
                />
            </div>
        </div>
    )
}

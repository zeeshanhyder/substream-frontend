import { MediaEntity } from '@/client-api/types/media-entity'
import { WatchHistoryEntry } from '@/client-api/types/watch-history'
import { TitleCarouselWide } from '@/components/ui/title-carousel/title-carousel-wide'
import { TextCustom } from '@/components/ui/typography'
import { getCurrentUserId } from '@/lib/session'
import { getMediaById } from '@/server-api/get-media-by-id'
import { getWatchHistory } from '@/server-api/get-watch-history'
import { withSuspense } from '@/utils/with-suspense'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

const content = {
    continueWatching: 'Continue Watching',
}
async function ContinueWatchingComponent() {
    const userId = await getCurrentUserId()
    const { data: watchHistory } = await getWatchHistory(userId)
    const watchStats = watchHistory?.reduce((prev, currItem) => {
        return {
            ...prev,
            [currItem.mediaId]: currItem,
        }
    }, {}) as Record<string, WatchHistoryEntry>
    const titlesReq = watchHistory?.map(({ mediaId }) =>
        getMediaById(userId, mediaId)
    )
    if (!titlesReq) return <></>
    const titles = await Promise.all(titlesReq)
    const parsedTitles = titles
        .filter((title) => title.data !== undefined)
        .map((title) => title.data!)
        .map((title) => {
            const titleWatchStats = watchStats[title.id]
            title.metadata!.watchStats = {
                progress: titleWatchStats?.progress ?? 0,
            }
            return title
        }) as MediaEntity[]

    if (!parsedTitles || parsedTitles.length === 0) return <></>
    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
                <TextCustom className="text-2xl">
                    {content.continueWatching}
                </TextCustom>
                <ArrowRight size={24} weight="bold" />
            </div>
            <TitleCarouselWide titles={parsedTitles} />
        </div>
    )
}

export const ContinueWatching = withSuspense(ContinueWatchingComponent)

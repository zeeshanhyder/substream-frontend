import { getMediaById, getWatchHistory } from '@/api/persona'
import { MediaEntity } from '@/api/types/media-entity'
import { TitleCarouselWide } from '@/components/ui/title-carousel/title-carousel-wide'
import { TextCustom } from '@/components/ui/typography'
import { withSuspense } from '@/utils/with-suspense'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

async function ContinueWatchingComponent() {
    const { data: watchHistory } = await getWatchHistory()
    const titlesReq = watchHistory?.map(({ mediaId }) =>
        getMediaById('2plT7NnugdweKWvAKGeWa', mediaId)
    )
    if (!titlesReq) return <></>
    const titles = await Promise.all(titlesReq)
    const parsedTitles = titles
        .filter((title) => title.data !== undefined)
        .map((title) => title.data!) as MediaEntity[]

    if (!parsedTitles || parsedTitles.length === 0) return <></>
    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
                <TextCustom className="text-2xl">Continue Watching</TextCustom>
                <ArrowRight size={24} weight="bold" />
            </div>
            <TitleCarouselWide titles={parsedTitles} />
        </div>
    )
}

export const ContinueWatching = withSuspense(ContinueWatchingComponent)

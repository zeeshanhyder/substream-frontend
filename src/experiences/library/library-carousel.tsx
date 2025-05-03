import { getMedia } from '@/api/persona'
import { TitleCarousel } from '@/components/ui/title-carousel/title-carousel'
import { TextCustom } from '@/components/ui/typography'
import { withSuspense } from '@/utils/with-suspense'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

async function LibraryCarouselComponent() {
    const { data: mediaTitles } = await getMedia('2plT7NnugdweKWvAKGeWa')

    return (
        <div className="flex flex-col mt-[2vmax]">
            <div className="flex flex-row items-center gap-2">
                <TextCustom className="text-2xl">All Content</TextCustom>
                <ArrowRight size={24} weight="bold" />
            </div>
            <TitleCarousel titles={mediaTitles} />
        </div>
    )
}

export const LibraryCarousel = withSuspense(LibraryCarouselComponent)

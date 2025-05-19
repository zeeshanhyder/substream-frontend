import { TitleCarousel } from '@/components/ui/title-carousel/title-carousel'
import { TextCustom } from '@/components/ui/typography'
import { getCurrentUserId } from '@/lib/session'
import { getUserMedia } from '@/server-api/get-user-media'
import { withSuspense } from '@/utils/with-suspense'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

async function LibraryCarouselComponent() {
    const userId = await getCurrentUserId()
    const { data: mediaTitles } = await getUserMedia(userId)

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

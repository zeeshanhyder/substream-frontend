import { MediaEntity } from '@/api/types/media-entity'
import CarouselCard from './carousel-card'

type TitleCarouselProps = {
    titles?: MediaEntity[] | null
}

export function TitleCarousel({ titles }: TitleCarouselProps) {
    if (!titles) return

    const titleCarousel = titles.map((title) => {
        return <CarouselCard key={title.id} title={title}></CarouselCard>
    })

    return (
        <div className="flex flex-row overflow-x-scroll scroll-smooth scrollbar-hide py-2">
            {titleCarousel}
        </div>
    )
}

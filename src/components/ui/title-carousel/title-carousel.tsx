import { MediaEntity } from '@/client-api/types/media-entity'
import CarouselCard from './carousel-card'
import Link from 'next/link'

type TitleCarouselProps = {
    titles?: MediaEntity[] | null
}

export function TitleCarousel({ titles }: TitleCarouselProps) {
    if (!titles) return

    const titleCarousel = titles.map((title) => {
        return (
            <Link key={title.id} href={`/title/${title.id}`}>
                <CarouselCard title={title}></CarouselCard>
            </Link>
        )
    })

    return (
        <div className="flex flex-row overflow-x-scroll scroll-smooth scrollbar-hide py-2">
            {titleCarousel}
        </div>
    )
}

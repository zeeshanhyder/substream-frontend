'use client'
import { MediaEntity } from '@/api/types/media-entity'
import { BodySmall } from '../typography'
import { useCurrentSelectedTitle } from '@/experiences/library/selected-media-title'
import { useEffect } from 'react'

type CarouselProps = {
    titles: MediaEntity[]
}

type CarouselCardProps = {
    title: MediaEntity
}

function CarouselCardWide({ title }: CarouselCardProps) {
    const { setTitle } = useCurrentSelectedTitle()
    let dbImage = title.metadata?.stillPath ?? title.metadata?.posterImage
    if (!dbImage) {
        dbImage = 'https://placehold.co/300x180?text=M'
    } else {
        dbImage = `https://image.tmdb.org/t/p/w500${dbImage}`
    }
    const mediaName = title.mediaTitle ?? title.metadata?.title
    return (
        <>
            <div
                role="button"
                tabIndex={0}
                aria-label={`Continue watching ${mediaName}`}
                className="flex flex-col max-w-[375px]"
                onMouseOver={() => setTitle(title)}
            >
                <div
                    key={title.id}
                    className="min-w-[350px] max-w-[350px] w-[350px] h-[200px] min-h-[200px] bg-[#fff] flex flex-col rounded-lg mr-3 cursor-pointer bg-cover"
                    data-name={mediaName}
                    style={{
                        backgroundImage: `url(${dbImage})`,
                        boxShadow: '1px 1px 2px #ccc',
                    }}
                >
                    <div className="flex flex-row"></div>
                </div>
                <BodySmall className="mt-2 font-[500] max-w-[350px]">
                    {title.metadata?.title}
                </BodySmall>
            </div>
        </>
    )
}

export function TitleCarouselWide({ titles }: CarouselProps) {
    const { setTitle } = useCurrentSelectedTitle()
    useEffect(() => {
        setTimeout(() => {
            if (titles?.length) {
                setTitle(titles[0])
            }
        }, 1400)
    }, [titles?.length])

    if (!titles || titles.length === 0) return
    const titleCarousel = titles.map((title) => {
        return (
            <CarouselCardWide key={title.id} title={title}></CarouselCardWide>
        )
    })

    return (
        <div className="flex flex-row overflow-x-scroll scroll-smooth scrollbar-hide py-2">
            {titleCarousel}
        </div>
    )
}

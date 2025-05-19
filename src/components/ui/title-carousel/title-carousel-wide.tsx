'use client'
import { MediaEntity } from '@/client-api/types/media-entity'
import { BodySmall } from '../typography'
import { useCurrentSelectedTitle } from '@/components/library/selected-media-title'
import { useEffect } from 'react'
import { Progress } from '@heroui/react'
import Link from 'next/link'

type CarouselProps = {
    titles: MediaEntity[]
}

type CarouselCardProps = {
    title: MediaEntity
}

function CarouselCardWide({ title }: CarouselCardProps) {
    const { setTitle } = useCurrentSelectedTitle()
    let coverImage = title.metadata?.stillPath ?? title.metadata?.posterImage
    if (!coverImage) {
        coverImage = 'https://placehold.co/300x180?text=M'
    } else {
        coverImage = `https://image.tmdb.org/t/p/w500${coverImage}`
    }
    const mediaName = title.mediaTitle ?? title.metadata?.title
    return (
        <Link href={`/watch/${title.id}`}>
            <div
                role="button"
                tabIndex={0}
                aria-label={`Continue watching ${mediaName}`}
                className="flex flex-col max-w-[375px]"
                onMouseOver={() => setTitle(title)}
            >
                <div
                    key={title.id}
                    className="min-w-[350px] max-w-[350px] w-[350px] h-[200px] min-h-[200px] bg-[#fff] flex flex-col-reverse rounded-lg mr-3 cursor-pointer bg-cover"
                    data-name={mediaName}
                    style={{
                        backgroundImage: `url(${coverImage})`,
                        boxShadow: '1px 1px 2px #ccc',
                    }}
                >
                    <Progress
                        className="h-[8px]"
                        color="warning"
                        value={title?.metadata?.watchStats?.progress}
                    />
                </div>
                <BodySmall className="mt-2 font-[500] max-w-[350px]">
                    {title.metadata?.title}
                </BodySmall>
            </div>
        </Link>
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

import { MediaContent } from '@/api'
import { Button } from '@heroui/react'
import Link from 'next/link'
import { RefObject, useEffect, useRef, useState } from 'react'

const HeroImage = ({ content }: { content: MediaContent[0] }) => {
    return (
        <div
            className="flex flex-col grow bg-cover bg-center bg-fixed cover-img-container min-w-[100%] w-full"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${content.backdrop_path})`,
            }}
        >
            <div className="flex flex-col justify-end grow relative z-10 items-end sm:pr-20 nameplate w-full bottom-[30vh] xl:bottom-[21vh]">
                <h3 className="font-black text-5xl headline select-none">
                    {content.title}
                </h3>
                <p
                    style={{
                        textAlign: 'right',
                        textShadow: '0 0 5px #333',
                    }}
                    className="lg:w-[45%] 2xl:w-[30%] text-xl my-5 select-none sm:line-clamp-3 xl:line-clamp-4"
                >
                    {content.overview}
                </p>
                <Link href="/media/1">
                    <Button size="lg" color="primary" radius="sm">
                        <span className="font-semibold text-xl">
                            Go to Show
                        </span>
                    </Button>
                </Link>
            </div>
        </div>
    )
}
export default function Hero({
    featuredContent,
    ref,
}: {
    featuredContent: MediaContent
    ref?: RefObject<HTMLDivElement | null>
}) {
    const [currentImg, setImg] = useState(0)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (!timerRef.current) {
            timerRef.current = setInterval(() => {
                const maxVal = 100 * featuredContent.length
                setImg((currVal) =>
                    currVal + 100 === maxVal ? currVal : currVal + 100
                )
            }, 10000)
        }
        return function () {
            if (timerRef.current) {
                clearInterval(timerRef.current)
                timerRef.current = null
            }
        }
    }, [])

    return (
        <div
            ref={ref}
            className="min-h-[100vh] w-full flex flex-row slider"
            style={{ marginLeft: `-${currentImg}%` }}
        >
            {featuredContent.map((content, key) => (
                <HeroImage key={key} content={content} />
            ))}
        </div>
    )
}

'use client'
import { MediaEntity } from '@/client-api/types/media-entity'
import { TextCustom } from '@/components/ui/typography'
import { Button, Link } from '@heroui/react'
import { Play, PlusCircle } from '@phosphor-icons/react'
import { MediaTitle } from '../library/selected-media-title'

const content = {
    playnow: 'Start watching',
    resume: 'Resume watching',
    addTo: 'Watchlist',
}

export const PlayNow = ({ title }: { title: MediaEntity }) => {
    const mediaName = title?.mediaTitle ?? title?.metadata?.title
    const alreadyWatched = (title?.metadata?.watchStats?.progress ?? 0) > 0
    const playButtonText = alreadyWatched ? content.resume : content.playnow
    return (
        <div className="flex flex-col mb-5 absolute z-20">
            <MediaTitle title={title} />
            <TextCustom
                className="text-xl text-[#eee] max-w-[500px] font-normal mt-5 line-clamp-6"
                style={{ textShadow: '0 0 5px rgba(32,32,32,0.8)' }}
            >
                {title?.metadata?.summary}
            </TextCustom>
            <div className="flex flex-row mt-5">
                <Button
                    href={`/watch/${title.id}`}
                    as={Link}
                    aria-label={`Watch ${mediaName} now`}
                    className="mt-5 w-[200px] rounded-full shadow-xl flex row justify-between"
                    variant="solid"
                    color="primary"
                >
                    <span className="font-semibold">{playButtonText}</span>
                    <Play size={20} />
                </Button>
                <Button
                    variant="bordered"
                    color="primary"
                    className="ml-5 mt-5 w-[200px] border-none rounded-full flex row justify-between"
                >
                    <span className="font-semibold color-[#000]">
                        {content.addTo}
                    </span>
                    <PlusCircle size={20} color="#f0f0f0" />
                </Button>
            </div>
        </div>
    )
}

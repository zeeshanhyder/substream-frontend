import { MediaContent } from '@/api'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'
import { ContentCard } from './content-card'

export default function ContentList({
    title,
    content,
}: {
    title: string
    content: MediaContent
}) {
    return (
        <div className="mb-20 max-w-[100%] overflow-hidden w-[100%]">
            <h3 className="font-semibold text-2xl mb-5 cursor-pointer flex items-center select-none">
                {title} <CaretRight weight="bold" />
            </h3>
            <div
                style={{ scrollbarWidth: 'none' }}
                className="flex flex-row items-center overflow-hidden overflow-x-auto"
            >
                {content.map((mediaContent, idx) => (
                    <ContentCard content={mediaContent} key={idx} />
                ))}
            </div>
        </div>
    )
}

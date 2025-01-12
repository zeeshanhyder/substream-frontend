import { MediaContent } from '@/api'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'
import { ContentCard } from './content-card'

export default function ContentGrid({
    title,
    content,
}: {
    title: string
    content: MediaContent
}) {
    return (
        <div>
            <h3 className="font-semibold text-2xl mb-5 cursor-pointer flex items-center select-none">
                {title} <CaretRight weight="bold" />
            </h3>
            <div className="items-center wrapper">
                {content.map((mediaContent, idx) => (
                    <ContentCard content={mediaContent} key={idx} />
                ))}
            </div>
        </div>
    )
}

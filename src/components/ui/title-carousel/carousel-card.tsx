import { MediaEntity } from '@/api/types/media-entity'

type CarouselCardProps = {
    title: MediaEntity
}
export default function CarouselCard({ title }: CarouselCardProps) {
    let dbImage = title.metadata?.posterImage ?? title.metadata?.stillPath
    if (!dbImage) {
        dbImage = 'https://placehold.co/250x350?text=M'
    } else {
        dbImage = `https://image.tmdb.org/t/p/w500${dbImage}`
    }
    const mediaName = title.mediaTitle ?? title.metadata?.title
    return (
        <div
            role="button"
            tabIndex={0}
            aria-label={mediaName}
            key={title.id}
            className="min-w-[170px] max-w-[170px] w-[170px] h-[250px] min-h-[250px] bg-[#fff] flex flex-col rounded-md mr-3 cursor-pointer bg-cover"
            data-name={mediaName}
            style={{
                backgroundImage: `url(${dbImage})`,
                boxShadow: '1px 1px 2px #ccc',
            }}
        />
    )
}

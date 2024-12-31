import { MediaContent } from '@/api'

export const ContentCard = ({ content }: { content: MediaContent[0] }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w300/${content.poster_path}`
    return (
        <div
            style={{
                height: '300px',
                maxHeight: '300px',
                minWidth: '210px',
                width: '210px',
                backgroundSize: '100%',
                backgroundImage: `url(${posterUrl})`,
                borderRadius: '5px',
            }}
            className="mr-3 2xl:mr-6"
        ></div>
    )
}

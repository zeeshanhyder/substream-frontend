'use client'
import { getMediaById } from '@/client-api/persona'
import { useQuery } from '@/client-api/utils/use-query'
import { useUserSessionStore } from '@/providers/user-session-provider'
import { getTmdbImg } from '@/utils/get-tmdb-img'
import MediaPlayer from '@/components/media-player'

export type TitleExperienceProps = {
    titleId: string
}

const RenderWatch = ({
    titleId,
    userId,
}: {
    titleId: string
    userId: string
}) => {
    const {
        data: title,
        loading,
        error,
    } = useQuery(() => getMediaById(userId, titleId))

    if (loading) {
        return <div>Loading...</div>
    }
    if (error || title === null) {
        return <div>Error</div>
    }

    const backgroundImageId =
        title?.metadata?.stillPath ?? title?.metadata?.backdropImage

    return (
        <div className="h-[100vh] max-h-[100vh] overflow-hidden flex flex-col bg-black relative grow">
            <div
                style={{
                    background:
                        'linear-gradient(99deg,rgba(0,0,0, 1) 30%, rgba(0,0,0, 0.75) 55%, rgba(0,0,0, 0.45) 67%, transparent 80%)',
                }}
                className="absolute top-0 left-0 w-full h-full z-9"
            />
            <div className="flex flex-col absolute z-10 w-full h-full">
                <div className="min-h-[5rem] flex flex-row items-center px-6"></div>
                <div className="min-h-20 max-h-20 flex flex-row grow items-center">
                    <div className="flex grow"></div>
                    <div className="flex mx-10 cursor-pointer"></div>
                </div>
            </div>
            <MediaPlayer
                src={`/api/propel/stream/${userId}/${titleId}`}
                thumbnailSrc={getTmdbImg(backgroundImageId ?? '', 'original')}
                title={title?.metadata?.title ?? ''}
                subtext={title?.simpleId ?? ''}
                type={title?.category}
                titleId={titleId}
            />
        </div>
    )
}
export const WatchExperience = ({ titleId }: TitleExperienceProps) => {
    const userId = useUserSessionStore((store) => store.id)
    if (!userId) {
        return <div>Loading...</div>
    }

    return <RenderWatch titleId={titleId} userId={userId} />
}

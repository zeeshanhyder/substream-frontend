import { MediaEntity } from '@/client-api/types/media-entity'
import { useLazyQuery } from '@/client-api/utils/use-query'
import { BodySmall, TextCustom } from '@/components/ui/typography'
import { useUserSessionStore } from '@/providers/user-session-provider'
import { getMediaById } from '@/server-api/get-media-by-id'
import { getTmdbImg } from '@/utils/get-tmdb-img'
import { Tabs, Tab, Card } from '@heroui/react'
import Link from 'next/link'
import { useEffect } from 'react'

type EpisodesProps = {
    title: MediaEntity
}

const content = {
    watchMore: (titleName: string) => `Watch more of ${titleName}`,
}

type EpisodeTabProps = {
    episode: MediaEntity
}
function EpisodeTab({ episode }: EpisodeTabProps) {
    return (
        <Link href={`/watch/${episode.id}`}>
            <div className="flex flex-col">
                <Card className="min-w-[350px] h-[200px] max-h-[200px] mr-5">
                    <div
                        style={{
                            backgroundImage: `url(${getTmdbImg(episode?.metadata?.stillPath ?? '', 'original')})`,
                        }}
                        className="grid grid-cols-6 grow bg-cover"
                    ></div>
                </Card>
                <BodySmall className="font-semibold text-lg mt-2 mr-5">
                    {episode.metadata?.title ?? ''}
                </BodySmall>
            </div>
        </Link>
    )
}

export default function Episodes({ title: showDetails }: EpisodesProps) {
    const shouldFetchEpisodeParent = !!showDetails.parent?.id
    const category = showDetails.category
    const userId = useUserSessionStore((store) => store.id)
    const {
        data: parentTitle,
        loading,
        query: fetchEpisodeParent,
    } = useLazyQuery(() => getMediaById(userId, showDetails?.parent?.id ?? ''))

    if (category === 'MOVIE') {
        return null
    }

    useEffect(() => {
        if (shouldFetchEpisodeParent) {
            fetchEpisodeParent()
        }
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    const title = shouldFetchEpisodeParent ? parentTitle : showDetails
    const hasEpisodes = (title?.seasons?.length ?? 0) > 0

    if (!hasEpisodes) return null

    return (
        <div className="flex flex-col min-h-[20vh] px-[10vw] pt-10">
            <TextCustom className="text-2xl">
                {content.watchMore(
                    title?.metadata?.title ?? title?.mediaTitle ?? ''
                )}
            </TextCustom>
            <div className="mt-5">
                <Tabs variant="underlined">
                    {title?.seasons?.map((season) => (
                        <Tab
                            key={season.name}
                            title={season.name}
                            className="flex flex-row overflow-hidden overflow-x-scroll"
                        >
                            {season.episodes?.map((episode) => (
                                <EpisodeTab
                                    key={episode.id}
                                    episode={episode}
                                />
                            ))}
                        </Tab>
                    ))}
                </Tabs>
            </div>
        </div>
    )
}

import { MediaEntity } from '@/client-api/types/media-entity'
import { BodySmall, TextCustom } from '@/components/ui/typography'
import { getTmdbImg } from '@/utils/get-tmdb-img'
import { Tabs, Tab, Card } from '@heroui/react'
import Link from 'next/link'

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

type EpisodesTabProps = {
    episodes: MediaEntity[]
    seasonName: string
}

export default function Episodes({ title }: EpisodesProps) {
    const category = title.category

    if (category === 'MOVIE') {
        return null
    }

    return (
        <div className="flex flex-col">
            <TextCustom className="text-2xl">
                {content.watchMore(title?.metadata?.title ?? '')}
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

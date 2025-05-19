import { WatchExperience } from '@/experiences/watch/watch'

export default async function Page({
    params,
}: {
    params: { titleId: string }
}) {
    const { titleId } = await params
    return <WatchExperience titleId={titleId} />
}

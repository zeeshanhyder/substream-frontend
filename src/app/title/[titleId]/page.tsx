import { TitleExperience } from '@/experiences/title/title'

export type TitlePageProps = {
    params: Promise<{
        titleId: string
    }>
}
export default async function TitlePage({ params }: TitlePageProps) {
    const { titleId } = await params
    return <TitleExperience titleId={titleId} />
}

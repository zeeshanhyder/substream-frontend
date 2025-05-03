import { Card } from "@heroui/react"

export type MovieCardProps = {
    title: string
    src: string
}

export default function MovieCard({ title, src }: MovieCardProps) {
    return (
        <div>
            <Card className="w-[350px] h-[200px] max-h-[200px] mr-3">
                <div
                    style={{
                        backgroundImage: `url(${src})`,
                    }}
                    className="grid grid-cols-6 flex grow bg-cover"
                ></div>
            </Card>
            <h3 className="font-semibold text-lg mt-2">{title}</h3>
        </div>
    )
}

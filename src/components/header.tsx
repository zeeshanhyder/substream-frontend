import { ArrowLeft } from '@phosphor-icons/react'

type HeaderProps = {
    title: string
    subtitle: string
}
export default function Header({ title, subtitle }: HeaderProps) {
    return (
        <header className="flex items-center justify-between h-20 px-6 bg-linear-to-b from-gray-900 to-transparent absolute left-0 right-0 z-10">
            <div className="min-w-[48px]">
                <ArrowLeft />
            </div>
            <div className="flex grow flex-col justify-center">
                <h3 className="text-xl font-bold">{title}</h3>
                <h5 className="text-lg font-semibold">{subtitle}</h5>
            </div>
        </header>
    )
}

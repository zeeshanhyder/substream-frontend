'use client'
import { MediaEntity } from '@/client-api/types/media-entity'
import { useContext, ReactNode, useState, createContext } from 'react'
import { getTmdbImg } from '@/utils/get-tmdb-img'
import { TextCustom } from '@/components/ui/typography'
import { Button, Link } from '@heroui/react'
import {
    MonitorArrowUp,
    MonitorPlay,
    Play,
    PlusCircle,
} from '@phosphor-icons/react'

const content = {
    goto: 'Go to Show',
    addTo: 'Watchlist',
}

type CurrentSelectedTitleContextProps = {
    selectedTitle: MediaEntity | undefined
    setTitle: (title: MediaEntity) => void
}

const CurrentSelectedTitleContext =
    createContext<CurrentSelectedTitleContextProps>({
        setTitle: (title: MediaEntity) => {},
        selectedTitle: undefined,
    })

export const useCurrentSelectedTitle = () =>
    useContext<CurrentSelectedTitleContextProps>(CurrentSelectedTitleContext)

export function CurrentSelectedTitleProvider({
    children,
}: {
    children: ReactNode
}) {
    const [currentTitle, setCurrentTitle] = useState<MediaEntity | undefined>(
        undefined
    )
    const setTitle = (title?: MediaEntity) => {
        setCurrentTitle(title)
    }

    return (
        <CurrentSelectedTitleContext.Provider
            value={{ selectedTitle: currentTitle, setTitle }}
        >
            {children}
        </CurrentSelectedTitleContext.Provider>
    )
}

export const MediaTitle = ({ title }: { title?: MediaEntity }) => {
    const titleImage = title?.metadata?.titleImage

    if (titleImage) {
        return (
            <img src={getTmdbImg(titleImage, 'w300')} className="w-[200px]" />
        )
    }
    return (
        <TextCustom
            className="text-4xl max-w-[200px] text-[#eee]"
            style={{ textShadow: '0 0 10px #000' }}
        >
            {title?.metadata?.title ?? title?.mediaTitle}
        </TextCustom>
    )
}

export const SelectedMediaTitle = ({ title }: { title: MediaEntity }) => {
    const mediaName = title?.mediaTitle ?? title?.metadata?.title
    return (
        <div className="mb-5 absolute z-20 mt-[-20vh]">
            <MediaTitle title={title} />
            <TextCustom
                className="text-xl text-[#eee] max-w-[500px] font-normal mt-5 line-clamp-4 text-shadow-2xl"
                style={{ textShadow: '0 0 2px var(--foreground)' }}
            >
                {title?.metadata?.summary}
            </TextCustom>
            <div className="flex flex-row mt-5">
                <Button
                    href={`/title/${title.id}`}
                    as={Link}
                    aria-label={`Resume watching ${mediaName}`}
                    className="mt-5 w-[200px] rounded-full shadow-xl flex row justify-between"
                    variant="solid"
                    color="secondary"
                >
                    <span className="font-semibold text-[var(--background)]">
                        {content.goto}
                    </span>
                    <MonitorPlay size={20} color="var(--background)" />
                </Button>
            </div>
        </div>
    )
}

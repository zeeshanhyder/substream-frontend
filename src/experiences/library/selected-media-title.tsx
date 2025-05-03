'use client'
import { MediaEntity } from '@/api/types/media-entity'
import { useContext, ReactNode, useState, createContext } from 'react'
import { getTmdbImg } from '@/utils/get-tmdb-img'
import { TextCustom } from '@/components/ui/typography'
import { Button } from '@heroui/react'
import { ClockClockwise, Play, PlusCircle } from '@phosphor-icons/react'

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

const MediaTitle = ({ title }: { title?: MediaEntity }) => {
    const titleImage = title?.metadata?.titleImage

    if (titleImage) {
        return (
            <div
                style={{
                    backgroundImage: `url(${getTmdbImg(titleImage, 'w300')})`,
                    backgroundSize: '50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom left',
                }}
                className="w-[500px] h-[100px] bg-cover"
            />
        )
    }
    return (
        <TextCustom
            className="text-4xl max-w-[200px] text-[#eee]"
            style={{ textShadow: '1px 1px 1px #999' }}
        >
            {title?.metadata?.title ?? title?.mediaTitle}
        </TextCustom>
    )
}

export const SelectedMediaTitle = () => {
    const { selectedTitle } = useCurrentSelectedTitle()
    const mediaName =
        selectedTitle?.mediaTitle ?? selectedTitle?.metadata?.title
    return (
        <div className="flex flex-col mb-5 absolute z-20">
            <MediaTitle title={selectedTitle} />
            <TextCustom
                className="text-xl text-[#eee] max-w-[500px] font-normal mt-5 line-clamp-4"
                style={{ textShadow: '0 0 5px rgba(32,32,32,0.8)' }}
            >
                {selectedTitle?.metadata?.summary}
            </TextCustom>
            <div className="flex flex-row mt-5">
                <Button
                    aria-label={`Resume watching ${mediaName}`}
                    className="mt-5 w-[250px] rounded-full shadow-xl"
                    variant="solid"
                >
                    <Play size={20} />
                    <span className="font-[500]">{content.goto}</span>
                </Button>
                <Button
                    variant="bordered"
                    style={{ color: '#f0f0f0' }}
                    className="ml-5 mt-5 border-none rounded-full"
                >
                    <PlusCircle size={20} color="#f0f0f0" />
                    <span className="font-[500] color-[#000]">
                        {content.addTo}
                    </span>
                </Button>
            </div>
        </div>
    )
}

'use client'
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react'
import {
    SelectedMediaTitle,
    useCurrentSelectedTitle,
} from './selected-media-title'

export function Backdrop() {
    const { selectedTitle } = useCurrentSelectedTitle()
    const [fadeIn, setFadeIn] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            if (selectedTitle?.id) {
                setFadeIn(1)
            }
        }, 0)
    }, [selectedTitle?.id])

    const imagePath =
        selectedTitle?.metadata?.backdropImage ??
        selectedTitle?.metadata?.stillPath

    const imageUrl = imagePath
        ? `url('https://image.tmdb.org/t/p/original${imagePath}')`
        : ''
    return (
        <>
            <div
                className="absolute z-5 inset-0 max-h-[100vh] bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage: imageUrl,
                    transition: 'all 1s ease-in-out',
                    opacity: fadeIn,
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(0deg, #f8f7f2 15%, transparent 60%)',
                    }}
                ></div>
            </div>
            <div
                className="absolute z-15"
                style={{
                    backgroundImage: imageUrl,
                    transition: 'all 1s ease-in-out',
                    opacity: fadeIn,
                }}
            >
                <SelectedMediaTitle />
            </div>
        </>
    )
}

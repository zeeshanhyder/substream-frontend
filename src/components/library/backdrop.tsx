'use client'
import { useEffect, useState } from 'react'
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

    if (!selectedTitle) {
        return null
    }

    const imagePath =
        selectedTitle?.metadata?.backdropImage ??
        selectedTitle?.metadata?.stillPath

    const imageUrl = imagePath
        ? `url('https://image.tmdb.org/t/p/original${imagePath}')`
        : ''
    return (
        <>
            <div
                className="px-[10vw] absolute z-5 inset-0 min-h-[100vh] min-w-[100vw] max-h-[100vh] bg-fixed bg-center bg-cover flex flex-col justify-center"
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
                <SelectedMediaTitle title={selectedTitle} />
            </div>
        </>
    )
}

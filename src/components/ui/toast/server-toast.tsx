'use client'

import { addToast, ToastProps } from '@heroui/react'
import { useEffect } from 'react'

type ServerToastProps = {
    title: string
    toastMessage: string
}

export const ServerToast = ({
    title,
    toastMessage,
    ...rest
}: ServerToastProps & Partial<Omit<ToastProps, 'title' | 'description'>>) => {
    useEffect(() => {
        addToast({
            title,
            description: toastMessage,
            ...rest,
        })
    }, [toastMessage])

    return null
}

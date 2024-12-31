import { RefObject, useEffect, useState } from 'react'

export default function useIntersection<T extends HTMLDivElement>({
    ref,
    intersectionHandler,
    options,
}: {
    ref: RefObject<T | null>
    intersectionHandler: IntersectionObserverCallback
    options: IntersectionObserverInit
}) {
    const [observer, setObserver] = useState<IntersectionObserver | undefined>()
    useEffect(() => {
        if (ref?.current) {
            const observerTarget = new IntersectionObserver(
                intersectionHandler,
                options
            )
            setObserver(() => {
                if (ref.current) {
                    observerTarget.observe(ref.current)
                    return observerTarget
                }
                return undefined
            })
        }

        return function () {
            if (ref?.current && observer) {
                observer?.unobserve(ref?.current)
                observer?.disconnect()
            }
        }
    }, [])

    return {
        observer,
    }
}

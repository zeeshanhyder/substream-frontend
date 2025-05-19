import { Suspense } from 'react'
import DefaultFallback from './default-fallback'

export const withSuspense = (
    Component: () => Promise<React.JSX.Element>,
    Fallback?: () => React.JSX.Element
) => {
    const FallbackComponent = Fallback ?? DefaultFallback
    return () => (
        <Suspense fallback={<FallbackComponent />}>
            <Component />
        </Suspense>
    )
}

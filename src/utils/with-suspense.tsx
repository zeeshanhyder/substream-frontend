import { Suspense } from 'react'

function DefaultFallback() {
    return <div>Loading...</div>
}

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

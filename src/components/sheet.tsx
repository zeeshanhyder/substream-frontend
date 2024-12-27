import React from 'react'

export default function Sheet({
    children,
    ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>) {
    return (
        <div className="flex flex-col grow" {...props}>
            {children ?? null}
        </div>
    )
}

import { JSX, ClassAttributes, HTMLAttributes } from 'react'

export default function Overlay(
    props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLDivElement> &
        HTMLAttributes<HTMLDivElement>
) {
    return <div {...props}></div>
}

import React, { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TypographyProps {
    children: ReactNode
    displayElement?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
    className?: string
}

export const TextCustom = ({
    children,
    displayElement,
    className,
    ...props
}: TypographyProps & ComponentProps<'p'>) => {
    const DisplayElement = displayElement || 'p'
    return (
        <DisplayElement
            className={cn('font-bold leading-large tracking-tight', className)}
            {...props}
        >
            {children}
        </DisplayElement>
    )
}

export const ExperienceHeading = ({ children }: TypographyProps) => (
    <TextCustom
        displayElement="h1"
        className="text-5xl font-bold leading-tight"
    >
        {children}
    </TextCustom>
)

export const Heading1 = ({ children, className }: TypographyProps) => (
    <h1
        className={cn(
            'text-large font-bold leading-large tracking-tight',
            className
        )}
    >
        {children}
    </h1>
)

export const Heading2 = ({ children, className }: TypographyProps) => (
    <h2
        className={cn(
            'text-medium font-bold leading-medium tracking-tight',
            className
        )}
    >
        {children}
    </h2>
)

export const Heading3 = ({ children, className }: TypographyProps) => (
    <h3
        className={cn(
            'text-small font-semibold leading-small tracking-tight',
            className
        )}
    >
        {children}
    </h3>
)

export const Subtitle = ({ children, className }: TypographyProps) => (
    <p
        className={cn(
            'text-small font-medium leading-small text-foreground/80',
            className
        )}
    >
        {children}
    </p>
)

export const BodyLarge = ({ children, className }: TypographyProps) => (
    <p className={cn('text-medium leading-medium', className)}>{children}</p>
)

export const Body = ({ children, className }: TypographyProps) => (
    <p className={cn('text-small leading-small', className)}>{children}</p>
)

export const BodySmall = ({ children, className }: TypographyProps) => (
    <p className={cn('text-tiny leading-tiny', className)}>{children}</p>
)

export const Caption = ({ children, className }: TypographyProps) => (
    <p className={cn('text-tiny leading-tiny text-foreground/70', className)}>
        {children}
    </p>
)

export const Label = ({ children, className }: TypographyProps) => (
    <label className={cn('text-tiny font-medium leading-tiny', className)}>
        {children}
    </label>
)

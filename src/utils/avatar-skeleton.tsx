'use client'
import { Card, Skeleton } from '@heroui/react'

export default function AvatarFallback() {
    return (
        <div className="flex flex-wrap gap-8 p-6">
            {[1, 2, 3].map((item) => (
                <div
                    key={item}
                    className="flex flex-col items-center justify-center"
                >
                    <Card className="bg-[var(--background)] p-0 border-none shadow-none mr-5">
                        <Skeleton
                            className="h-25 w-25 rounded-full bg-[var(--background)]"
                            style={{
                                background:
                                    'linear-gradient(90deg, #fff 25%, #f8f8f8 50%, #fff 75%)',
                                backgroundSize: '200% 100%',
                            }}
                        />
                    </Card>
                    <div className="mt-4 flex flex-col items-center gap-1">
                        <Skeleton className="h-6 w-25 bg-white" />
                    </div>
                </div>
            ))}

            <style jsx global>{`
                @keyframes shimmer {
                    0% {
                        background-position: 200% 0;
                    }
                    100% {
                        background-position: -200% 0;
                    }
                }
            `}</style>
        </div>
    )
}

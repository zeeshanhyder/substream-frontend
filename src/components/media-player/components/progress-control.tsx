import Sheet from '@/components/sheet'
import { useState, useEffect } from 'react'
import { MediaButtonProps } from '../use-media-player-controls'
import { Progress as ProgressBar } from "@heroui/react"

export default function Progress({ mediaControls }: MediaButtonProps) {
    const {
        getPlayDuration,
        getCurrentPlayTime,
        currentRuntime,
        remainingRuntime,
    } = mediaControls
    const [currentProgress, setCurrentProgress] = useState(0)
    let interval: NodeJS.Timeout

    const updateWatchTime = () => {
        const playDuration = getPlayDuration()
        const currentPlayTime = getCurrentPlayTime()
        setCurrentProgress((currentPlayTime / playDuration) * 100)
        return
    }

    useEffect(() => {
        interval = setInterval(updateWatchTime, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    const handleSeek = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement
        const properTarget =
            (target.childNodes.length === 0 ? target.parentElement : target) ??
            target
        const rect = properTarget.getBoundingClientRect()
        const x = event.clientX - rect.left
        const width = rect.right - rect.left
        const seekTime = (x / width) * getPlayDuration()
        mediaControls.seekToTime(seekTime)
    }

    return (
        <Sheet
            onClick={handleSeek}
            className="flex flex-col grow justify-center min-h-[32px] cursor-pointer"
        >
            <ProgressBar
                className="w-full"
                value={currentProgress}
                size="sm"
                maxValue={100}
                color="primary"
                aria-label="Media progress bar"
            />
            <div className="pt-1.5 flex flex-row items-center space-between">
                <div className="flex">
                    <span className="text-sm font-semibold">
                        {currentRuntime}
                    </span>
                </div>
                <Sheet></Sheet>
                <div className="flex">
                    <span className="text-sm font-semibold">
                        {remainingRuntime}
                    </span>
                </div>
            </div>
        </Sheet>
    )
}

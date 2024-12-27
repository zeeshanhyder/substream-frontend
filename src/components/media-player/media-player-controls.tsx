'use client'
import { MouseEventHandler, RefObject, useEffect, useState } from 'react'
import Overlay from '@/components/overlay'
import Sheet from '@/components/sheet'
import { convertSecsToMins, throttle } from './utils'
import Progress from './components/progress-control'
import MediaFastForwardButton from './components/fast-forward-button'
import MediaPlayerFullScreenButton from './components/fullscreen-button'
import MediaPlayButton from './components/play-button'
import MediaRewindButton from './components/rewind-button'
import MediaPlayerSubtitleButton from './components/subtitles-button'
import MediaPlayerVolumeButton from './components/volume-control-button'
import {
    MediaControlProps,
    MediaControlsVisibility,
} from './use-media-player-controls'

export const MediaPlayerControls = ({ mediaControls }: MediaControlProps) => {
    const {
        toggleMediaState,
        toggleFullScreen,
        toggleMute,
        mediaControlsVisibility,
        showControls,
        hideControls,
    } = mediaControls

    const addMediaControlVisibilityClass = (
        controlElement: 'overlay' | 'mediaControls'
    ) => {
        const visibilityHiddenClass = 'video-controls-hidden'
        const visibilityShownClass =
            controlElement === 'overlay'
                ? 'overlay-visible'
                : 'video-controls-visible'

        if (mediaControlsVisibility === MediaControlsVisibility.HIDDEN) {
            return visibilityHiddenClass
        }
        return visibilityShownClass
    }

    const title = 'Big Buck Bunny'
    const subtitle = 'Movie'

    return (
        <div className="overlay flex flex-col grow w-full video-controls-container">
            <Overlay
                className={`${addMediaControlVisibilityClass('overlay')} absolute top-0 right-0 left-0 bottom-0 z-11 bg-gradient-to-t from-black to-transparent`}
            />
            <div
                onMouseOver={throttle(showControls, 1000)}
                onMouseLeave={hideControls}
                className={`flex flex-col relative z-12 grow w-full justify-center custom-video-controls ${addMediaControlVisibilityClass('mediaControls')}`}
            >
                <Sheet className="flex flex-col grow min-h-[33.3%]">
                    <header className="flex items-center justify-between h-20 px-6 py-16 bg-gradient-to-b from-gray-900 to-transparent absolute left-0 right-0 z-10">
                        <div className="mx-2 flex grow flex-col justify-center">
                            <h3 className="text-xl font-bold">{title}</h3>
                            <h5 className="text-lg font-semibold">
                                {subtitle}
                            </h5>
                        </div>
                    </header>
                </Sheet>
                <Sheet className="flex justify-center flex-row grow items-center min-h-[50px]">
                    <MediaRewindButton mediaControls={mediaControls} />
                    <MediaPlayButton
                        mediaControls={mediaControls}
                        onClick={toggleMediaState}
                    />
                    <MediaFastForwardButton mediaControls={mediaControls} />
                </Sheet>
                <Sheet className="flex justify-end flex-col grow p-6">
                    <Sheet className="flex flex-row items-center">
                        <div className="flex flex-col grow justify-center px-3">
                            <Progress mediaControls={mediaControls} />
                        </div>
                        <MediaPlayerSubtitleButton
                            mediaControls={mediaControls}
                        />
                        <MediaPlayerVolumeButton
                            mediaControls={mediaControls}
                            onClick={toggleMute}
                        />
                        <MediaPlayerFullScreenButton
                            mediaControls={mediaControls}
                            onClick={toggleFullScreen}
                        />
                    </Sheet>
                </Sheet>
            </div>
        </div>
    )
}

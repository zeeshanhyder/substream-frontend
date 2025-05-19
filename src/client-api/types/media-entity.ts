export type Metadata = {
    title: string
    alternateTitle?: string
    summary?: string
    imdbId: string
    tmdbId: string
    releaseDate?: string
    rating?: Array<{
        name: string
        rating: string
        iconLink?: string
    }>
    duration?: number
    thumbnailImage?: string
    titleImage?: string
    backdropImage?: string
    posterImage?: string
    stillPath?: string
    trailerLink?: string
    language?: string
    watchStats?: {
        lastWatchedAt?: Date
        progress?: number
    }
}

export type MediaEntity = {
    id: string
    mediaTitle: string
    mediaLocation?: string
    streamId?: string
    seasons?: Array<{
        id: string
        name: string
        shortName: string
        summary: string
        seasonNumber: number
        episodes: Array<MediaEntity>
    }>
    simpleId?: string
    episodeNumber?: number
    seasonNumber?: number
    category: 'MOVIE' | 'TV'
    metadata?: Metadata
    userId: string
}

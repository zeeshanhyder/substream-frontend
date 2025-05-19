export type WatchHistoryEntry = {
    mediaId: string
    watchedAt: Date
    watchDuration: number // in seconds
    progress: number // percentage 0-100
    watchCount: number
}

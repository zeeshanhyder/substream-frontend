import { TMDB_IMG_BASE_URL } from '@/api/config/config'

export const getTmdbImg = (key: string, size: string = 'w500') => {
    return `${TMDB_IMG_BASE_URL}/${size}${key}`
}

export const API_BASE_URL = 'http://localhost:7455/v1'
export const serverFetch = async (
    url: string | URL | globalThis.Request,
    init?: RequestInit
) => fetch(`${API_BASE_URL}${url}`, init)

export const TMDB_IMG_BASE_URL = 'https://image.tmdb.org/t/p'

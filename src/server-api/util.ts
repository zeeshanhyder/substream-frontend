export const API_ENDPOINT_URL = 'http://localhost:7455/v1'
export const serverFetch = async (
    url: string | URL | globalThis.Request,
    init?: RequestInit
) => fetch(`${API_ENDPOINT_URL}${url}`, init)

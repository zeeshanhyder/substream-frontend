import { useEffect, useState } from 'react'
import { APIResponse, HTTPStatus } from '../types/service-response'

type QueryResult<T> = {
    data: T | null
    error: string | null
    status: HTTPStatus | null
    loading: boolean
}

export const useQuery = <T extends unknown, U>(
    query: (args: T) => Promise<APIResponse<U>>
): QueryResult<U> => {
    const [data, setData] = useState<U | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [status, setStatus] = useState<HTTPStatus | null>(null)
    const [loading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        query({} as T)
            .then((response) => {
                setData(response.data ?? null)
                setError(response.error ?? null)
                setStatus(response.status ?? null)
            })
            .catch((err) => {
                setError(err.message)
                setStatus(HTTPStatus.INTERNAL_SERVER_ERROR)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return {
        data,
        error,
        status,
        loading,
    }
}

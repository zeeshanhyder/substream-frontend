export enum HTTPStatus {
    OK = 200,
    CREATED = 201,
    UPDATED = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
    SERVICE_UNAVAILABLE = 503,
}

export type APIResponse<T> = {
    status: HTTPStatus
    data?: T
    error?: string
    validationErrors?: string[]
}

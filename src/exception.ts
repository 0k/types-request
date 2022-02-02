

export class HttpError extends Error {
    code: number
    data: string
    response: any
    constructor (code: number, message: string, data: string, response: any) {
        super(message)
        this.code = code
        this.data = data
        this.response = response
        this.name = 'HttpError'
    }
}


export class RequestFailed extends Error {
    constructor (message: string) {
        super(message)
        this.name = 'RequestFailed'
    }
}



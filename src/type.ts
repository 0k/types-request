
export const httpMethods = [
    'GET',
    'POST',
    'PUT',
    'DELETE',
    'PATCH',
    'HEAD'
] as const


export type httpMethod = typeof httpMethods[number]


export type coreHttpOpts = {
    protocol: string
    host: string
    path: string
    method: httpMethod
    headers?: {}
    port?: number
    data?: {}
    responseHeaders?: {[k: string]: any}
}


export type HttpRequest = (opts: coreHttpOpts) => Object
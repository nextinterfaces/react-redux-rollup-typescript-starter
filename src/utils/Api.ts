// import axios, { AxiosInstance, AxiosPromise } from 'axios'

import axios, {AxiosInstance, AxiosPromise} from 'axios'

export class Api {

    public static get(route: string): AxiosPromise {
        return Api.http().get(route)
    }

    public static http(): AxiosInstance {
        // const API_SERVER = 'api_server'
        const options = {
            baseURL: 'https://jsonplaceholder.typicode.com/todos',
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json',
                'X-Custom-Header': 'foobar'
            }
        }
        return axios.create(options)
    }
}

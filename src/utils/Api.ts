// import axios, { AxiosInstance, AxiosPromise } from 'axios'

import axios, {AxiosInstance, AxiosPromise} from 'axios'

export class Api {

    // public static get(route: string): AxiosPromise {
    //     return Api.get(route)
    // }

    public static http(): AxiosInstance {
        const options = {
            baseURL: 'https://jsonplaceholder.typicode.com/todos',
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return axios.create(options)
    }
}

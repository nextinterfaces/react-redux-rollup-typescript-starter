// import axios, { AxiosInstance, AxiosPromise } from 'axios'

import axios, {AxiosInstance} from 'axios'

export class Api {

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

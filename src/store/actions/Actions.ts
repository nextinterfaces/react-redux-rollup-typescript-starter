import ActionTypes from './ActionTypes'
import {Api} from '../../utils/Api'


export default {

    doActionOne(list) {
        return {type: ActionTypes.ACTION_ONE, payload: list}
    },

    doCallApi(ticketId) {
        let httpPromise = Api.http().get('' + ticketId)
        return {type: ActionTypes.CALL_API, payload: httpPromise}
    }

}

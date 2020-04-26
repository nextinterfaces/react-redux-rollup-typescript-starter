import ActionTypes from './ActionTypes'
import {Api} from '../../utils/Api'


export default {

    doDisplayNotification(list) {
        return {type: ActionTypes.DISPLAY_NOTIFICATION, payload: list}
    },

    doCallApi(ticketId) {
        let httpPromise = Api.http().get('' + ticketId)
        return {type: ActionTypes.CALL_API, payload: httpPromise}
    }

}

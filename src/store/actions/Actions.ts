import ActionTypes from './ActionTypes'
import {Api} from '../../utils/Api'


export default {

    doActionOne(list) {
        return {type: ActionTypes.ACTION_ONE, payload: list}
    },

    doCallApi(ticketId) {
        let httpPromise = Api.get('' + ticketId)
        return {type: ActionTypes.CALL_API, payload: httpPromise}
    },

    doOpenTab(tabName) {
        return {type: ActionTypes.TAB_NAME, payload: tabName}
    }

}

import * as Immutable from 'immutable'
import ActionTypes from '../actions/ActionTypes'
import {ReducerUtils as R} from './ReducerUtils'

const initialStore = () => {
    const map_ = {}
    for(let k of Object.keys(ActionTypes)) {
        map_[k] = null
    }
    return map_
}

// Initial default state of store
const DEFAULT_STATE = Immutable.fromJS(initialStore())

export default (state = DEFAULT_STATE, action: { type, payload, error? }) => {

    const payload = action.payload

    if (action.error) {
        const resp = action.payload.response
        console.error('Action error', resp)
        return state
    }

    // Only success cases pass through
    switch (action.type) {

        case ActionTypes.ACTION_ONE:
            return R.actionOne(state, payload)

        case ActionTypes.CALL_API:
            return R.callApi(state, payload)

        default:
            return state
    }

}

import * as Immutable from 'immutable'

export class ReducerUtils {

    static actionOne(state, payload): any {
        return state.merge({
            'ACTION_ONE': Immutable.fromJS(payload)
        })
    }

    static callApi(state, payload): any {
        return state.merge({
            'CALL_API': Immutable.fromJS(payload.data),
            'ACTION_ONE': Immutable.fromJS(JSON.stringify(payload.data))
        })
    }

}

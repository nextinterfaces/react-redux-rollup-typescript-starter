import * as Immutable from 'immutable'

export class ReducerUtils {

    static actionOne(state, payload): any {
        return state.merge({
            'ACTION_ONE': Immutable.fromJS(payload)
        })
    }

    static callApi(state, payload): any {
        console.log('-- callApi payload', payload)
        return state.merge({
            'CALL_API': Immutable.fromJS(payload.data)
        })
    }

}

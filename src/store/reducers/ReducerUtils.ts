import * as Immutable from 'immutable'

export class ReducerUtils {

    static displayNotification(state, payload): any {
        return state.merge({
            'DISPLAY_NOTIFICATION': Immutable.fromJS(payload),
            'DISPLAY_COMPONENT_1': Immutable.fromJS(true),
            'DISPLAY_COMPONENT_2': Immutable.fromJS(false)
        })
    }

    static callApi(state, payload): any {
        return state.merge({
            'CALL_API': Immutable.fromJS(payload.data),
            'DISPLAY_NOTIFICATION': Immutable.fromJS(JSON.stringify(payload.data)),
            'DISPLAY_COMPONENT_1': Immutable.fromJS(false),
            'DISPLAY_COMPONENT_2': Immutable.fromJS(true)
        })
    }

}

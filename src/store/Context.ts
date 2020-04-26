import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ActionCreators from './actions/ActionCreators'

/**
 * This is the @decorator function hiding redux connect functionality,
 * It maps Action to Props, as well as maps State to Props
 */
export default (ComposeComponent) => {
    // overcomes TS2693: 'DefaultRootState' only refers to a type, but is being used as a value here.
    let DefaultRootState
    return connect(
        // @ts-ignore
        ({context}) => {
            return {context}
        },
        (dispatcher) => {
            const actionCreators = bindActionCreators(ActionCreators.context, dispatcher);
            // attach store.dispatch to `props`, so it can be passed for routing --> dispatch(push('path'))
            (actionCreators as any).dispatch = dispatcher
            return actionCreators
        }
        // 'as typeof' overcomes TS1238: Unable to resolve signature of class decorator when called as an expression.
    )(ComposeComponent) as typeof DefaultRootState
}
// const bindActionCreatorsMap = {}
// for (let key in ActionCreators.context) {
//     console.log('-- 22 key', key)
//     bindActionCreatorsMap[key] = ActionCreators.context[key]
// }
// export default (ComposeComponent) => (
//     connect(
//         // @ts-ignore
//         ({ context }) => ({ context }),
//         (dispatcher) => {
//             const actionCreators = bindActionCreators({
//                 doActionOne: ActionCreators.context.doActionOne,
//                 doReadFeed: ActionCreators.context.doReadFeed,
//                 doOpenTab: ActionCreators.context.doOpenTab
//             }, dispatcher);
//
//             // attach store.dispatch to `props`, so it can be passed for routing --> dispatch(push('path'))
//             (actionCreators as any).dispatch = dispatcher;
//             return actionCreators
//         }
//     )(ComposeComponent)
// )

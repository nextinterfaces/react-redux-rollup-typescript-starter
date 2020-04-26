import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import ContextReducer from './reducers/ContextReducer'

export default combineReducers({
    context: ContextReducer,
    router: routerReducer
})

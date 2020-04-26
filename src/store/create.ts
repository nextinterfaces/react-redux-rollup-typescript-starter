import {applyMiddleware, createStore as reduxStore} from 'redux'
import reducers from './reducers'

import {createBrowserHistory} from 'history'

import {routerMiddleware} from 'react-router-redux'
import ReduxPromise from 'redux-promise'

const history = createBrowserHistory()

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history)

const applyMiddlewareFunc = applyMiddleware(ReduxPromise, historyMiddleware)(reduxStore)

const create = (...args: any[]) => {
    return applyMiddlewareFunc(reducers, ...args)
}

export default {create, history}

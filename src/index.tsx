import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import BaseStore from './store/create'
import {Main} from './components/Main'

declare const window: any

const reduxDebugger = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = BaseStore.create(reduxDebugger)

ReactDOM.render(<Provider store={store}>
    <Main store={store} history={BaseStore.history} />
</Provider>, document.getElementById('app'))

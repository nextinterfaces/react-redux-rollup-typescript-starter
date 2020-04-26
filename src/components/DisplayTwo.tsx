import React from 'react'

import '../../scss/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Context from '../store/Context'
import {StoreKey} from '../store/StoreKey'

@Context
export class DisplayTwo extends React.Component<any> {

    render() {
        const {context} = this.props
        return <div style={{textAlign: 'center'}}>
            <h4>This is Component Two</h4>
            <h5><code>{context.get(StoreKey.DISPLAY_NOTIFICATION)}</code></h5>
        </div>
    }

}

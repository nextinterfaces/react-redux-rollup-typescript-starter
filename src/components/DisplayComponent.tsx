import React from 'react'

import '../../scss/main.scss'
import {Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Context from '../store/Context'
import {StoreKey} from '../store/StoreKey'
import {Api} from '../utils/Api'


declare const window: any

@Context
export class DisplayComponent extends React.Component<any> {

    render() {
        const {context} = this.props
        console.log('-- DisplayComponent', ' context:', context)
        return <div style={{textAlign: 'center'}}>
            {context.get(StoreKey.ACTION_ONE)}
        </div>

    }

}

import React from 'react'

import '../../scss/main.scss'
import {Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Context from '../store/Context'
import {DisplayOne} from './DisplayOne'
import {DisplayTwo} from './DisplayTwo'


declare const window: any

@Context
export class Main extends React.Component<any, any> {

    componentDidMount() {
        const {params} = this.props
    }

    buttonClicked = () => {
        this.props.doDisplayNotification(['action-', 'one-', 'clicked'])
    }

    getReduxData = async () => {
        this.props.doDisplayNotification(['start-', 'calling-', 'the-', 'api ...'])
        // mimic latency
        setTimeout(() => {
            let apiPromise = this.props.doCallApi('2')
            apiPromise.catch(err => {
                console.log('Error:', err)
                this.props.doDisplayNotification('' + err)
            })
        }, 500)
    }

    render() {
        const {context} = this.props
        const isComponentOne = context.get('DISPLAY_COMPONENT_1') === true
        return <div style={{textAlign: 'center'}}>
            <br/>
            <h2>
                Hello React / Redux / Rollup / Typescript
            </h2>
            <hr/>
            <Button color='primary' onClick={this.buttonClicked}>Show Redux</Button>
            <br/><br/>
            <Button color='success' onClick={this.getReduxData}>Show Redux API</Button>
            <br/><br/>

            {isComponentOne &&
            <h2>
                <DisplayOne/>
            </h2>
            }

            {!isComponentOne &&
            <h2>
                <DisplayTwo/>
            </h2>
            }
        </div>
    }

}

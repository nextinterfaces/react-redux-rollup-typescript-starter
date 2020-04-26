import React from 'react'

import '../../scss/main.scss'
import {Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Context from '../store/Context'
import {StoreKey} from '../store/StoreKey'
import {Api} from '../utils/Api'
import {DisplayComponent} from './DisplayComponent'


declare const window: any

@Context
export class Main extends React.Component<any, any> {

    componentDidMount() {
        const {params} = this.props
    }

    buttonClicked = () => {
        this.props.doActionOne(['hello', 'world'])
        const payload = this.getApiData()
        console.log('-- payload', payload)
    }

    getApiData = async () => {
        try {
            return await Api.get('1')
        } catch (e) {
            console.log('Error: retrieving feed', e)
            return []
        }
    }

    getReduxData = async () => {
        let apiPromise = this.props.doCallApi(Math.floor(Math.random() * Math.floor(5)))
        apiPromise.catch(err => {
            console.log('-- ERROR while calling API:', err)
        })
    }

    render() {
        const {params, context} = this.props

        console.log('-- props', this.props, ' context', context, ' params', params)

        return <div style={{textAlign: 'center'}}>
            <br/>
            <h2>
            Hello Main
            </h2><br/>
            <Button color='primary' onClick={this.buttonClicked}>Click Action One</Button>
            <br/><br/>
            <Button color='secondary' onClick={this.getApiData}>Click mock API</Button>
            <br/><br/>
            <Button color='success' onClick={this.getReduxData}>Click Redux Promise</Button>
            <br/><br/>
            <DisplayComponent {...this.props}/>
        </div>

        // const isNewsfeed = params.type === Constants.TYPE_NEWSFEED
        // const isAd = params.type === Constants.TYPE_AD
        //
        // let readFeed = context.get(StoreKey.CALL_API)
        // readFeed = !!readFeed ? readFeed.toJS() : null
        //
        // if (readFeed) {
        //     return <NewsArticle {...this.props}/>
        // }
        //
        // if (isNewsfeed) {
        //     return <NewsTabList {...this.props}/>
        //
        // } else if (isAd) {
        //     return <AdPage {...this.props}/>
        // }
    }

}

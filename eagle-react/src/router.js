///**
// * Created by ios001 on 2017/7/10.
// */
import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import App from './routes/app/App'
import About from './routes/about/About'
import StationList from './routes/station/StationList'
import BusList from './routes/bus/BusList'
import Charge from './routes/charge/ChargeStyle'
import BusDetails from './routes/bus/BusDetails'

class RouterRoot extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}/>
                <Route path="/about" component={About}/>
                <Route path="/station_list" component={StationList}/>
                <Route path="/bus_list" component={BusList}/>
                <Route path="/charge" component={Charge}/>
                <Route path="/bus_Details" component={BusDetails}/>
            </Router>
        )
    }
}

export default RouterRoot;
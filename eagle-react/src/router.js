///**
// * Created by ios001 on 2017/7/10.
// */
import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import {Router, Route, hashHistory, browserHistory} from 'react-router'

import App from './routes/app/App'
import About from './routes/about/About'
import StationList from './routes/station/StationList'
import BusList from './routes/bus/BusList'
import Charge from './routes/charge/ChargeStyle'
import BusDetails from './routes/bus/BusDetails'
import StationDetails from './routes/station/StationDetails'
import TestStation  from  './routes/station/TestStation'
class RouterRoot extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}/>
                <Route path="/about" component={About}/>
                <Route path="/station_list" component={StationList}/>
                <Route path="/bus_list" component={BusList}/>
                <Route path="/charge" component={Charge}/>
                <Route path="/bus_details" component={BusDetails}/>
                <Route path="/station_deatils" component={TestStation}/>
            </Router>
        )
    }
}

export default RouterRoot;
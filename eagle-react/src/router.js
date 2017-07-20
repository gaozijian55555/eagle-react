///**
// * Created by ios001 on 2017/7/10.
// */
import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import {Router, Route, hashHistory, browserHistory} from 'react-router'

import App from './routes/app/App'
import OpsWarningHost from './routes/warning/OpsWarningHost'
import OpsStationList from './routes/station/OpsStationList'
import TestStation  from  './routes/station/OpsChargePile'
import OrderList from './routes/order/OrderList'
import Personal from  './routes/personal/OpsPersonal'
class RouterRoot extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}/>
                
                <Route path="/ops_station_list" component={OpsStationList}/>
                <Route path="/ops_warning_list" component={OpsWarningHost}/>
                <Route path="/ops_charge_pile_list" component={TestStation}/>
                <Route path="/ops_order_list" component={OrderList}/>
                <Route path="/ops_personal" component={Personal}/>
            </Router>
        )
    }
}

export default RouterRoot;
/**
 * Created by ios001 on 2017/7/11.
 */
import React, { Component } from 'react';
import '../station/Station.css';
import {Link} from 'react-router'
import './BusList.css'

function HelloComponent(props,/*context*/) {
    return <div className="chargeBusList chargeBusPading">
        <p className="topLeftTitle">
            <span>{props.time}</span>
            <span> {props.line_name}</span>
            <span className="topRightTitle floatRight">工作日</span>
        </p>

        <div className="clearBoth addressBottom">

            <div className="floatLeft">
                <div className="lv_out">
                </div>
                <span className="clearBoth fromAddressAlign">{props.fromAddress}</span>
                <span className="clearBoth toAddressAlign">{props.toAddress}</span>
            </div >

            <div className="floatRight">
                <span className="priceAlign">¥0.1</span>
                <span className="minsAlign">约50mins</span>
            </div>
        </div>
    </div>
}

class BusList extends Component {
    render() {
        return (
            <div className="list_bg">

             <Link to="/">
                    <HelloComponent line_name="云部落大巴1号线" time = "07:30" fromAddress = "云部落TMT园区西南门" toAddress="金榜世家6期(西北门)"/>
             </Link>

             <Link to="/">
                    <HelloComponent line_name="云部落大巴2号线" time = "08:30" fromAddress="绿梅一村" toAddress="云部落TMT园区西南门" />
             </Link>

             <Link to="/">
                    <HelloComponent line_name="云部落大巴3号线" time = "09:30" fromAddress="863软件园" toAddress="景舒院1村" />
             </Link>

             <Link to="/">
                    <HelloComponent line_name="云部落大巴4号线" time = "10:30" fromAddress="联航路地铁站" toAddress="人民广场" />
             </Link>

            </div>
        );
    }
}

export default BusList;
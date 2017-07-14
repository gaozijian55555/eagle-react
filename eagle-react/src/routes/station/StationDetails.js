/**  * Created by WXW on 2017/7/12.  */
import React, {Component} from 'react';
import {Link} from 'react-router'
import './Station.css';
import start_png   from  '../../images/Star_Icon_y_big@2x.png'
import address_png from  '../../images/site_icon.png'
import pile_png    from  '../../images/Community_Serve_List.png'
import right_png   from  '../../images/Right_arrow_btn.png'
import phoneIcon   from  '../../images/phone_btn.png'

class TopComponent extends React.Component {
    callPhone() {
        alert("hahaha")
    }

    render() {
        return (
            <div className="stationDeatils_TopList">
                <div className="stationDeatils_distanceLeftDiv">
                    <div>
                        <img src={address_png} className="stationDeatils_TopAddressIcon" alt=""/>
                        <span className="stationDeatils_address">
                        联航路1588号产业楼公寓14栋102室
                    </span>
                    </div>
                    <div className="stationDeatils_phoneNumber">
                        20000012
                        <span className="stationDeatils_phoneRightLine">
                    </span>
                        <button onClick={this.callPhone}>
                            <img src={phoneIcon} className="stationDeatils_phoneIcon" alt=""/>
                        </button>
                    </div>
                </div>

                <div className="stationDeatils_distanceDiv stationDeatils_distanceRightDiv">
                    <img src={address_png} className="stationDeatils_distanceIcon" alt=""/>
                    <p className="stationDeatils_distance">0.15KM</p>
                </div>

                <div className="stationDeatils_introduce">
                    内部使用站点内部使用站点内部使用站点内部使用站点内部使用站点内部使用站点内部使用站点内部使用站点内部使用站点内部使用站点内部使用站点
                </div>

                <div className="stationDeatils_evaluate">
                    <img src={pile_png} className="stationDeatils_BottomPileIcon" alt=""/>
                    <span> 评价  </span>
                    <img src={start_png} className="content-star" alt=""/>
                    <img src={start_png} className="content-star" alt=""/>
                    <img src={start_png} className="content-star" alt=""/>
                    <img src={start_png} className="content-star" alt=""/>
                    <img src={start_png} className="content-star" alt=""/>
                    <span> (5) </span>
                    <img src={right_png} className="content-right fr" alt=""/>
                </div>
            </div>
        );
    }
}

function PortNumberComponent(props, /*context*/) {
    return <div className={props.portNumberClassName}>
        <div >
            <img src={pile_png} className="stationDeatils_PortIcon" alt=""/>
            <span className="stationDeatils_FreePort">{props.freePort}</span>
            <span className="stationDeatils_TotalPort">{props.totalPort}</span>
        </div>
    </div>
}

function PayTypeComponent(props, /*context*/) {
    return <div className="stationDeatils_Pay">
        <div >
            <img src={pile_png} className="stationDeatils_PortIcon" alt=""/>
            <span className="stationDeatils_PayType">{props.payType}</span>
        </div>
    </div>
}

class BottomComponent extends React.Component {
    render() {
        return (
            <div className="stationDeatils_Bottom">

                <div className="stationDeatils_BottomList">
                    <img src={pile_png} className="stationDeatils_BottomPileIcon" alt=""/>
                    <span >充电桩数:</span>
                    <PortNumberComponent freePort="30" totalPort="/100"
                                         portNumberClassName="stationDeatils_PortNumber stationDeatils_DCPortNumber"/>
                    <PortNumberComponent freePort="10" totalPort="/30"
                                         portNumberClassName="stationDeatils_PortNumber stationDeatils_ACPortNumber"/>
                </div>

                <div className="stationDeatils_BottomList">
                    <img src={pile_png} className="stationDeatils_BottomPileIcon" alt=""/>
                    <span >支付方式:</span>
                    <PayTypeComponent payType="微信"/>
                </div>

                <div className="stationDeatils_BottomList clearBoth">
                    <div className="floatLeft">
                        <img src={pile_png} className="stationDeatils_BottomPileIcon" alt=""/>
                        <span >开放时间:</span>
                    </div>

                    <div className="stationDeatils_OpenTime">
                        <p >06:00-18:00</p>
                        <p >18:00-06:00</p>
                    </div>

                </div>

                <div className="clearBoth stationDeatils_BottomList">
                    <img src={pile_png} className="stationDeatils_BottomPileIcon" alt=""/>
                    <span >充电费用:</span>
                    <span className="stationDeatils_Price">00:00-24:00 2.0元/度</span>
                </div>

                <div className="stationDeatils_BottomList clearBoth">
                    <div className="floatLeft">
                        <img src={pile_png} className="stationDeatils_BottomPileIcon" alt=""/>
                        <span >停车费用:</span>
                    </div>

                    <div className="floatRight stationDeatils_PakingPrice">
                        <p >06:00-18:00 10元/60分钟</p>
                        <p >18:00-06:00 10元/60分钟</p>
                        <p >实际收费以停车场收取为准实际收费以停车场收取为准实际收费以停车场收取为准</p>
                    </div>
                    <div className="clearBoth stationDeatils_Attention">
                        注: 导航过程中将使用腾讯地图
                    </div>
                </div>
            </div>

        );
    }
}

export default class stationDetailsComponent extends React.Component {
    render() {
        return (
            // style={{backgroundColor: "green"}}
            <div className="stationDeatils_List">
                <TopComponent/>
                <BottomComponent/>
            </div>
        );
    }
}

TopComponent.propTypes = {
    address: React.PropTypes.string.isRequired,
    phoneNumber: React.PropTypes.string.isRequired,
    distance: React.PropTypes.string.isRequired,
}

/**
 * Created by WXW on 2017/7/11.
 */
import React, {Component} from 'react';
import {Link} from 'react-router'
import './BusList.css'
import greenCoach from '../../images/green_coach_icon.png'
import arrowsIcon from '../../images/arrows_icon.png'

function TopComponent(props, /*context*/) {
    return <div className="details">
        <div>
            <img src={greenCoach} className="detailsTopBusImage"/>
            <p className="detailsAddress">
                云部落TMT园区西南门 <img src={arrowsIcon} className="detailsArrowImage"/> 金榜世家6期(西北门)
            </p>
        </div>

        <div className="detailsTopBusInfo">
            <p></p>
            <p>车次编号: 1001</p>
            <p>发车时间: 17:45 (工作日)</p>
            <p>票价: 0.1元/次</p>
            <p>车牌号: 沪A00000</p>
        </div>
    </div>
}

function Middle(props, /*context*/) {
    return <div className={props.borderStyle}>
        <div className={props.classNames}>
        </div>
        <div>
            <p className="detailsMiddleStartName">{props.startName}
                <span className="detailsBusStartTime">{props.startTime}
                </span>
            </p>
            <p className="detailsMiddleAddress">{props.address}</p>
        </div>
    </div>
}

function MiddleComponent(props, /*context*/) {
    return <div className="details">
        <Middle startName="云部落TMT园区西北门" startTime="17:45发车"
                address="位置: 上海市闵行区颛兴东路1313/1331/1277云部落产业园铭牌处" classNames="detailsMiddle_start  "
                borderStyle="detailsMiddle_LeftBorder  detailsMiddleLeft"/>
        <Middle startName="云部落TMT园区西北门" startTime="17:45发车"
                address="位置: 上海市闵行区颛兴东路1313/1331/1277云部落产业园铭牌处" classNames="detailsMiddle_Origin "
                borderStyle="detailsMiddle_LeftBorder detailsMiddleLeft"/>
        <Middle startName="云部落TMT园区西北门" startTime="17:45发车"
                address="位置: 上海市闵行区颛兴东路1313/1331/1277云部落产业园铭牌处" classNames="detailsMiddle_Origin "
                borderStyle="detailsMiddle_LeftBorder detailsMiddleLeft"/>
        <Middle startName="云部落TMT园区西北门" startTime="17:45发车"
                address="位置: 上海市闵行区颛兴东路1313/1331/1277云部落产业园铭牌处" classNames="detailsMiddle_Origin "
                borderStyle="detailsMiddle_LeftBorder detailsMiddleLeft"/>
        <Middle startName="云部落TMT园区西北门" startTime="17:45发车"
                address="位置: 上海市闵行区颛兴东路1313/1331/1277云部落产业园铭牌处" classNames="detailsMiddle_end "
                borderStyle="border_none detailsMiddleLeft"/>
    </div>
}

function BottomComponent(props, /*context*/) {
    return <div className="details">
        <div className="captainExplain">队长说明</div>
        <div>
            <ul className="detailsUl">
                <li>乘车时,扫描二维码支付车票费用</li>
                <li>上车即收取全价车票,不按照乘坐路程分段计费</li>
                <li>每站停留2分钟,请提前在站点等候,避免误车</li>
            </ul>
        </div>
    </div>
}

export default class BusDetails extends Component {
    render() {
        return (
            <div className="list_bg">
                <TopComponent/>
                <MiddleComponent/>
                <BottomComponent/>
            </div>
        )
    }
}

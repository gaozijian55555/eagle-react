/**
 * Created by WXW on 2017/7/17.
 */
import React, {Component} from 'react';
import './testStation.css';
import right_png from '../../images/right_btn@2x.png'
import chargingPileIcon from '../../images/charging_pile_icon_black@2x.png'
import ConfirmWins from './PopupComponents'
import {Link} from 'react-router'
import { fetchStationChargingPileList } from '../../service/getData'
import {fetchStationChargingPileState} from '../../service/getData'

function TopComponent(props,/*context*/) {

    return <div className="testStation_TopStyle">
        <div className="testStation_TopLeftMargin floatLeft">
            # {props.data.id}
        </div>

        <div className="testStation_TopRightMargin floatRight">
            最近一次心跳：{props.data.updated_at}
        </div>
    </div>
}

function ThreeButtonComponent(props) {
    const clikTopStateButton = (event) => {
        alert('点击了' + props.ID);
    };

    return <div className="testStation_TopStateButtonSuper">
        <button onClick={clikTopStateButton} className={props.classNames}>
            <span className="testStation_TopStateButtonContent">{props.topTitle}</span>
            <span className="testStation_TopStateButtonContent">{props.bottomTitle}</span>
        </button>
    </div>
}

function TwoButtonComponent(props) {
    const clikTopStateButton = (event) => {
        alert('点击了' + props.ID);
    };

    return <div className="testStation_TopStateButtonSuper">
        <button onClick={clikTopStateButton} className={props.classNames}>
            <span className="testStation_TopStateButtonContent">{props.topTitle}</span>
            <span className="testStation_TopStateButtonContent">{props.bottomTitle}</span>
        </button>
    </div>
}

class TopStateComponent extends Component {
    propTypes = {
        datas: React.PropTypes.object.isRequired,
    };

    render() {
        return <div className="testStation_TopStateBg">
            <div >
                <ThreeButtonComponent ID="1" classNames="testStation_TopStateButton testStation_TopStateInactiveButton"
                                      topTitle="未激活" bottomTitle={this.props.datas.unactive}/>
                <ThreeButtonComponent ID="3" classNames="testStation_TopStateButton testStation_TopStateFreeButton"
                                      topTitle="空闲" bottomTitle={this.props.datas.idle}/>
                <ThreeButtonComponent ID="5" classNames="testStation_TopStateButton testStation_TopStateInactiveButton"
                                      topTitle="占用" bottomTitle={this.props.datas.occupy}/>
            </div>

            <div>
                <TwoButtonComponent ID="7" classNames="testStation_TopStateButton testStation_TopStateFaultButton"
                                    topTitle="故障" bottomTitle={this.props.datas.fault}/>

                <TwoButtonComponent ID="9" classNames="testStation_TopStateButton testStation_TopStateOffLineButton"
                                    topTitle="离线" bottomTitle={this.props.datas.offline}/>
            </div>
        </div>
    }
}

class CenterOriginComponent extends Component {
    propTypes = {
        leftTitle:React.PropTypes.string.isRequired,
        visible: React.PropTypes.bool,
    };

    constructor(props) {
        super(props);
        this.state = {visible: false};
    }

    show() {
        this.setState({visible: true});
    }

    hide() {
        this.setState({visible: false});
    }

    render() {
        /*封装弹框 暴露属性 调用者只需设置属性值即可*/
        var Array = this.props.leftTitle.split("：");
        const ConfirmInfo = {
            title: '修改' + Array[0],

            desc: Array[1],

            leftBtn: {
                text: '保存'
            }
            ,
            rightBtn: {
                text: '取消'
            }
            ,
        };

        return<div className="testStation_CenterOriginStyle">
                 {/*<button className="buttonDiv" onClick={this.show.bind(this)}></button>*/}
            {/*{this.state.visible ? <ConfirmWins {...ConfirmInfo} onLeftClick={this.hide.bind(this)}*/}
                                               {/*onRightClick={this.hide.bind(this)}/> : ""}*/}
            <div className="testStation_TopLeftMargin">
                {this.props.leftTitle}
            </div>

            <div className="testStation_centerRightMargin">
              <img src={chargingPileIcon} className="testStation_ChargingPileIcon" hidden={this.props.isShowCharegePrile.length}></img>
              <span className={this.props.classNames} hidden={this.props.isShowCharegePrile}>{this.props.current_status}</span>
              {/*<img src={right_png} hidden={this.props.isShowRightArrow} className="content-right fr" alt=""/>*/}
            </div>
        </div>
    }
}

class CenterComponent extends Component {
    propTypes = {
        data: React.PropTypes.object.isRequired,
    };

    render() {
        var  textColorStyle;
        if(this.props.data.current_status == "充电中"){
            textColorStyle =  "chargingPileStateText";
        }else if (this.props.data.current_status == "失败"){
            textColorStyle =  "chargingFailPileStateText";
        }else {
            textColorStyle =  "offLinePileStateText";
        }

        return (
            <div className="testStation_CenterStyle">
                <CenterOriginComponent leftTitle={"桩ID："+this.props.data.serial_number} isShowRightArrow="1" isShowCharegePrile="" classNames="testStation_ChargingPileStateText textColorStyle" current_status={this.props.data.current_status}/>
                <CenterOriginComponent leftTitle={"三方站ID："+this.props.data.third_party_station_id} isShowRightArrow="1" isShowCharegePrile="1"/>
                <CenterOriginComponent leftTitle={"三方桩ID："+this.props.data.third_party_pile_id} isShowRightArrow="1" isShowCharegePrile="1"/>
                <CenterOriginComponent leftTitle={"位置："+this.props.data.location+"号车位"} isShowRightArrow="1" isShowCharegePrile="1"/>
                <CenterOriginComponent leftTitle={"维护状态：" + this.props.data.power_status} isShowRightArrow="1" isShowCharegePrile="1"/>
            </div>
        )
    }
}

class BottomComponent extends React.Component{
    propTypes = {
        data: React.PropTypes.object.isRequired,
    };

    clickChargingPrileDetails() {
        alert('wdwd');
        window.webkit.messageHandlers.ShowNativeNavigationSheet.postMessage({body: '传数据'});
    }

    render() {
        return (
            <div className="testStation_BottomStyle">
                <button onClick={this.clickChargingPrileDetails} className="testStation_BottomBtnStyle floatRight">详情</button>

            </div>
        )
    }
}

class Components extends Component{
    propTypes = {
        datas: React.PropTypes.object.isRequired,
    };
    render() {
        return (
            <div className="testStation_ListComponent">
                <TopComponent data={this.props.datas}/>
                <CenterComponent data={this.props.datas}/>
                <BottomComponent data={this.props.datas}/>
            </div>
        )
    }
}

export default class TestStation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],//获取充电桩数据
            objects: {} //获取充电桩的不同状态桩的数量
        };
    }

    componentWillMount() {
        fetchStationChargingPileList(1,'81').then(res =>{
            this.setState({
                datas: res.items
            })
        })

        fetchStationChargingPileState('81').then(res =>{
            this.setState({
                objects: res
            })
        })
    }
    render() {

        return (<div className="testStation_ListBgStyle">
                    <TopStateComponent datas={this.state.objects}/>
                    {this.state.datas.map((item) => {
                        return (
                            <Components datas={item}></Components>
                        )
                    })}
            </div>
        )
    }
}

CenterOriginComponent.propTypes = {
    leftTitle: React.PropTypes.string,
};



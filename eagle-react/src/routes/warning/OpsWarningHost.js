/**
 * Created by ios001 on 2017/7/18.
 */
import React, { Component } from 'react';
import './warning.css'
import SearchBar from 'antd-mobile/lib/search-bar'
import Button from 'antd-mobile/lib/button'
import WingBlank from 'antd-mobile/lib/wing-blank'
import Tabs from 'antd-mobile/lib/tabs'
import WhiteSpace from 'antd-mobile/lib/white-space'
import {fetchOpsWarningCount, fetchOpsWarningOrderList, fetchOpsWarningPileList} from '../../service/getData'
import Toast from 'antd-mobile/lib/toast'
import Icon from 'antd-mobile/lib/icon'

const TabPane = Tabs.TabPane;

var WarningList = React.createClass({
    proptypes: {
        datas: React.PropTypes.object.isRequired,
        type: React.PropTypes.string.isRequired,   // type:  0-pile 1-order
        reason: React.PropTypes.string.isRequired,
    },

    render: function () {
        return <div className="content_bg cf">
            <div>
                <p className="content_text fl"> 告警时间: {this.props.datas==null?'':this.props.datas.change_state_time} </p>
                <div className="fr">
                    <span className="content_text"> 等级:</span>
                    <span className="content_level"> 1 </span>
                </div>
            </div>
            <p className="content_text cf"> 状态: 待处理 </p>
            <p className="content_text"> 类型: {this.props.type == '0'?'充电桩':'充电订单'} </p>
            <p className="content_text"> 原因: {this.props.reason} </p>
            <p className="content_text"> 站点: {this.props.datas==null?'':this.props.type == '0'?this.props.datas.area_name:this.props.datas.charging_pile.area_name} </p>
            <div>
                <span className="content_text"> 三方桩ID: {this.props.datas==null?'':this.props.type == '0'?this.props.datas.third_party_pile_id:this.props.datas.charging_pile.third_party_pile_id} </span>
                <span className="content_copy"> 复制 </span>
            </div>
        </div>
    }
});

export default class WarningHost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders_datas: [], // 列表数据
            piles_datas_cp_fault: [],
            piles_datas_cp_offline: [],
            warning_count: '',
            warning_today: '',
            value: ''
        };
    }

    componentWillMount() {
        this.fetchWarningCount();
        this.fetchWarningOrderList();
        this.fetchWarningPileList();
    }

    fetchWarningCount() {
        fetchOpsWarningCount().then(res => {
            this.setState({
                warning_count: res.waiting_alarm,
                warning_today: res.today_alarm
            })
        })
    }

    fetchWarningOrderList() {
        fetchOpsWarningOrderList(this.state.value).then(res => {
            this.setState({
                orders_datas: res.items,
            })
        })
    }

    fetchWarningPileList() {
        fetchOpsWarningPileList(this.state.value).then(res => {
            this.setState({
                piles_datas_cp_fault: res.cp_fault,
                piles_datas_cp_offline: res.cp_offline,
            })
        })
    }

    onChange= (value) => {
        this.setState({ value });
        Toast.loading('Loading...', 1, () => {
            this.fetchWarningOrderList();
            this.fetchWarningPileList();
        });
    };

    clear = () => {
        this.setState({ value: '' });
        this.fetchWarningOrderList();
        this.fetchWarningPileList();
    };

    callback(key) {
        console.log('onChange', key);
    }

    handleTabClick(key) {
        console.log('onTabClick', key);
    }

    render() {
        return (
            <div>
                <SearchBar placeholder="输入站点名称、三方桩ID进行检索"
                           showCancelButton={false}
                           value={this.state.value}
                           onChange={this.onChange}
                           onClean = {this.clear}
                />

                <div >
                    <Button className="btn fl btn_left" type="primary" onClick={e => console.log(e)}>
                        待处理告警:{this.state.warning_count} 个
                    </Button>

                    <Button className="btn fr btn_right" type="primary" onClick={e => console.log(e)}>
                        今日新增:{this.state.warning_today} 个
                    </Button>
                </div>
                <Tabs className='cf' defaultActiveKey="2" animated={false} onChange={this.callback}
                      onTabClick={this.handleTabClick}>
                    <TabPane tab="充电桩" key="1">
                        <div className="padding_10 "
                             style={{ height: '15rem', backgroundColor: '#f5f5f9' }}>
                            {this.state.piles_datas_cp_fault.map((item) => {
                                return <WarningList type = '0' datas = {item} reason="充电桩故障" />
                            })}
                            {this.state.piles_datas_cp_offline.map((item) => {
                                return <WarningList type = '0' datas = {item} reason="充电桩离线" />
                            })}
                        </div>
                    </TabPane>
                    <TabPane tab="充电订单" key="2">
                        <div className="padding_10"
                             style={{ height: '15rem', backgroundColor: '#f5f5f9' }}>
                            {this.state.orders_datas.map((item) => {
                                    return <WarningList type = '1' datas = {item} reason="开启失败(关闭电闸超时)" />
                                })}
                        </div>
                    </TabPane>
                </Tabs>
                <WhiteSpace />
            </div>
        )
    }
}
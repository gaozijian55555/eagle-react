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
import {fetchOpsWarningCount} from '../../service/getData'

const TabPane = Tabs.TabPane;

var WarningList = React.createClass({
   proptypes () {

   },
    render: function () {
        return <div className="content_bg cf">
            <div>
                <p className="content_text fl"> 告警时间: 111</p>
                <div className="fr">
                    <span className="content_text"> 等级:</span>
                    <span className="content_level"> 1 </span>
                </div>
            </div>
            <p className="content_text"> 状态: 待处理 </p>
            <p className="content_text"> 类型: 充电桩 </p>
            <p className="content_text"> 原因: 充电桩故障 </p>
            <p className="content_text"> 站点: 863软件园站点 </p>
            <div>
                <span className="content_text"> 三方桩ID: 2358656885 </span>
                <span className="content_copy"> 复制 </span>
            </div>
        </div>
    }
});

export default class WarningHost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datas: [], // 列表数据
            warning_count: '',
            warning_today: ''
        };
    }

    componentWillMount() {
        this.fetchWarningCount()
    }

    fetchWarningCount() {
        fetchOpsWarningCount().then(res => {
            this.setState({
                warning_count: res.waiting_alarm,
                warning_today: res.today_alarm
            })
        })
    }

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
                />

                <div >
                    <Button  className="btn fl btn_left" type="primary" onClick={e => console.log(e)}>
                        待处理告警:{this.state.warning_count} 个
                    </Button>

                    <Button className="btn fr btn_right" type="primary" onClick={e => console.log(e)}>
                        今日新增:{this.state.warning_today} 个
                    </Button>
                </div>
                <Tabs className='cf' defaultActiveKey="2" animated={false} onChange={this.callback} onTabClick={this.handleTabClick}>
                    <TabPane tab="充电桩" key="1">
                        <div className="padding_10 "
                            style={{ height: '15rem', backgroundColor: '#f5f5f9' }}>

                          <WarningList/>
                            <WarningList/>
                            <WarningList/>

                        </div>
                    </TabPane>
                    <TabPane tab="充电订单" key="2">
                        <div className="padding_10"
                            style={{ height: '15rem', backgroundColor: '#f5f5f9' }}>

                            <WarningList/>
                            <WarningList/>
                            <WarningList/>
                            <WarningList/>
                        </div>
                    </TabPane>
                </Tabs>
                <WhiteSpace />
            </div>
        )
    }
}
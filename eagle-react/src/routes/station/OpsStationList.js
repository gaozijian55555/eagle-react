/**
 * Created by ios001 on 2017/7/18.
 */
import React, { Component } from 'react';
import './Station.css';
import SearchBar from 'antd-mobile/lib/search-bar'
import Button from 'antd-mobile/lib/button'
import WingBlank from 'antd-mobile/lib/wing-blank'
import WhiteSpace from 'antd-mobile/lib/white-space'

import charging_pile_icon from '../../images/charging_pile_icon_black@2x.png'
import station_icon_inside from '../../images/intranet_site_bg@2x.png'

import {fetchOpsStationList} from '../../service/getData'
import Toast from 'antd-mobile/lib/toast'
import Icon from 'antd-mobile/lib/icon'

var OpsStationListCell = React.createClass({

    proptypes: {
        datas: React.PropTypes.object.isRequired
    },

    pushStationDetail: function(){
        alert('gaozijian_push');
        window.webkit.messageHandlers.PushStationDetail.postMessage({station_id: this.props.datas.id});
    },

    render: function () {
        return <div className="content_ops_bg"  onClick={this.pushStationDetail} >
            {this.props.datas.open_range=='内部专用'?<img className="content_ops_in" src={station_icon_inside}/>:''}
            <div className="cf">
                {this.props.datas.building_status == '建设中'? <span className="content_ops_build fl"> 建 </span> : ''}
                <span className="content_ops_title fl"> {this.props.datas.name} </span>
                <span className="content_ops_state fr"> {this.props.datas.state==0?'待发布':''} </span>
            </div>
            <p className="content_ops_admin cf"> 运营商:{this.props.datas.current_display_operator.name} </p>
            <div>
                <img className="content_ops_icon" src={charging_pile_icon}/>
                <span className="color_green content_ops_num"> {this.props.datas.free_charing_space} </span>
                <span className="content_ops_num"> /{this.props.datas.total_charing_space} </span>
            </div>
        </div>
    }
});

export default class OpsStationList extends Component {

    pushStationDetail(){
        alert('gaozijian_push');
        window.webkit.messageHandlers.PushStationDetail.postMessage({station_id: this.props.datas.id});
    }

    callback(key) {
        console.log('onChange', key);
    }

    constructor(props) {
        super(props);
        this.state = {
            datas: [], // 列表数据
            value: ''
        };
    }

    componentWillMount() {
        this.fetchAllData()
    }

    fetchAllData() {
        fetchOpsStationList(1, this.state.value, '').then(res => {
            this.setState({
                datas: res.items
            })
        })
    }

    onChange= (value) => {
        this.setState({ value });
        Toast.loading('Loading...', 1, () => {
            this.fetchAllData();
        });
    };

    clear = () => {
        this.setState({ value: '' });
        this.fetchAllData();
    };

    render() {
        return (
            <div>
                <SearchBar placeholder="输入站点名称、三方桩ID进行检索"
                           showCancelButton={false}
                           value={this.state.value}
                           onChange={this.onChange}
                           onClean = {this.clear}
                />
                <div className="cf">
                    <Button className="btn fl btn_left" type="primary" onClick={e => console.log(e)}>
                        站点总数: 个
                    </Button>
                    <Button className="btn fr btn_right" type="primary" onClick={e => console.log(e)}>
                        充电桩总数: 个
                    </Button>
                </div>
                <div className="cf">

                    {this.state.datas.map((item) => {
                        return (
                            <OpsStationListCell datas={item}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

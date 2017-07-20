/**
 * Created by ios001 on 2017/7/19.
 */
import React, { Component } from 'react';

import SearchBar from 'antd-mobile/lib/search-bar'
import Button from 'antd-mobile/lib/button'
import './order.css'
import {fetchOrderLsit} from '../../service/getData'

var OrderListCell = React.createClass({

    proptypes: {
        data : React.PropTypes.object.isRequired
    },

    render(){
        return <div className="order_list">
            <div className="padding_10 radius_t_l_10 radius_t_r_10 h20">
                <span className="fl f_s_18">{this.props.data.area_name}</span>
            </div>
            <div className="padding_10 h20">
                <span className="fl f_s_13">{this.props.data.created_at}</span>
            </div>
            <div className="padding_10 h20 m_t_10">
                <span className="fl f_s_15">用户id：{this.props.data.user_phone}</span>
            </div>
            <div className="padding_10 h30">
                <span className="fl f_s_15 t_a_c">来源：{this.props.data.record_source}</span>
                <div className="fr charge_state_icon"></div>
                <span className="fr f_s_15 t_a_c">{this.props.data.state}</span>
            </div>
            <div className="padding_10 h20 m_t_10">
                <span className="fl f_s_15">桩ID：{this.props.data.charging_pile[0].serial_number}</span>
            </div>
            <div className="padding_10 h30">
                <span className="fl f_s_15">三方桩ID：{this.props.data.charging_pile[0].third_party_pile_id}</span>
                <div className="fr btn_charge_stop">结束充电</div>
            </div>
            <div className="padding_10 border_top h30">
                <span className="fl f_s_15">订单编号：{this.props.data.order[0].number}</span>
                <div className="fr btn_copy">复制</div>
            </div>
        </div>
    }
});

export default class OrderList extends Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    /*componentWillMount() {
        fetchOrderLsit('', null, 10, 1).then(res >= {
            this.setState({
                data: res.items})
        });
    }*/

    render() {
        return (
            <div>
                <SearchBar placeholder="输入站点名称、三方桩ID进行检索"
                           showCancelButton={false}
                />
                <div >
                    <Button className="btn fl btn_left" type="primary" onClick={e => console.log(e)}>
                        请求中: 个
                    </Button>

                    <Button className="btn fr btn_right" type="primary" onClick={e => console.log(e)}>
                        准备就绪: 个
                    </Button>
                </div>
                <div >
                    <Button className="btn fl btn_left" type="primary" onClick={e => console.log(e)}>
                        充电中: 个
                    </Button>

                    <Button className="btn fr btn_right" type="primary" onClick={e => console.log(e)}>
                        结束中: 个
                    </Button>
                </div>

                <OrderListCell></OrderListCell>

            </div>
        )
    }
}
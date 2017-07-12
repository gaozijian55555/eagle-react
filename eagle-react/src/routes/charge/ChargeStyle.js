/**
 * Created by wsy on 2017/7/12.
 */

import React, { Component } from 'react';
import {Link} from 'react-router';
import './Charge.css'

var MChargeStyle = React.createClass({

        propTypes: {
            //标题
            title: React.PropTypes.string.isRequired,
            //标题右侧
            titleRight: React.PropTypes.string.isRequired,
            //站点名称
            siteName: React.PropTypes.string.isRequired,
            //充电桩编号
            pileNumber: React.PropTypes.string.isRequired,
            //充电桩类型
            pileStyle: React.PropTypes.string.isRequired,
            //接口标准
            iStandard: React.PropTypes.string.isRequired,
            //电流
            current: React.PropTypes.string.isRequired,
            //电压
            voltage: React.PropTypes.string.isRequired,
            //额定功率
            power: React.PropTypes.string.isRequired,
            //充电费用
            cost: React.PropTypes.string.isRequired,
            //客服
            callNumber: React.PropTypes.string.isRequired
        },

        render: function () {
            return <div>
            <div className="background_df">
                <span className="title"> {this.props.title} </span>
                <span className="btn_close fr" onclick={window.close()}> {this.props.titleRight} </span>
            </div>

            <div className="background_while ">
                <div><span className="title"> {this.props.title} </span></div>
            </div>
            </div>;
        }
    }
);

class ChargeStyle extends Component {
    componentDidMount() {
        fetch("www.baidu.com").then(res => {
            this.setState({data : res})
        });
    }

    render() {
        return (<div>
            <Link to="/">
                <MChargeStyle title="立即充电" titleRight="关闭" siteName="863软件园内" pileNumber="365106011"
                              pileStyle="交流充电桩" iStandard="国标" current="16A" voltage="220V"
                              power="3.5KW" cost="00:00 - 24:00 2.0元/度" callNumber="400-030-7759"/>
            </Link>
        </div>);
    }
}

export default ChargeStyle;
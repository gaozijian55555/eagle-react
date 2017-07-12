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
            <div className="title_cell">
                <span className="title"> {this.props.title} </span>
                <span className="btn_close fr" onclick={window.close()}> {this.props.titleRight} </span>
            </div>

            <div className="background_while hg25 f_s_14 bb_d8 p20">
                <div className="f_w_700 t_a_c mb_08">{this.props.siteName}</div>
                <div className="m00_a">
                    <div className="color_33"><p>充电桩编号：</p><span className="color_99">{this.props.pileNumber}</span></div>
                    <div className="color_33"><p>充电桩类型：</p><span className="color_99">{this.props.pileStyle}</span></div>
                    <div className="color_33"><p>接口标准：</p><span className="color_99">{this.props.iStandard}</span></div>
                    <div className="color_33"><p>电流：</p><span className="color_99">{this.props.current}</span></div>
                    <div className="color_33"><p>电压：</p><span className="color_99">{this.props.voltage}</span></div>
                    <div className="color_33"><p>额定功率：</p><span className="color_99">{this.props.power}</span></div>
                </div>
            </div>
                <div className="background_while hg25 f_s_14 color_99 bb_d8 mt_10">
                    <div className="fl hg25">
                        <div className="money_icon fl"></div>
                        <p className="d_i_b f_s_14 color_45">充电费用：</p>
                    </div>
                    <div className="w_55 d_i_b l_h_25 m_l_7p">{this.props.cost}</div>
                </div>
                <div className="background_while hg25 bb_d8 mb_40 f_s_12">若有疑问，请拨打{this.props.callNumber}
                <a className="phone_btn fr m_r_15"></a><i className="sg"></i>
                </div>
                <div className="charging_start_btn t_a_c">立即充电</div>
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
            <Link>
                <MChargeStyle title="立即充电" titleRight="关闭" siteName="863软件园内" pileNumber="365106011"
                              pileStyle="交流充电桩" iStandard="国标" current="16A" voltage="220V"
                              power="3.5KW" cost="00:00 - 24:00 2.0元/度" callNumber="400-030-7759"/>
            </Link>
        </div>);
    }
}

export default ChargeStyle;
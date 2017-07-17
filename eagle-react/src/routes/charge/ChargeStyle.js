/**
 * Created by wsy on 2017/7/12.
 */

import React, {Component} from 'react';
import {Link} from 'react-router';
import './Charge.css'
import {fetchFindPile} from '../../service/getData'
import {fetchStationList} from '../../service/getData'

var MChargeStyle = React.createClass({

        propTypes: {
            data: React.PropTypes.object.isRequired,
            //标题
            title: React.PropTypes.string.isRequired,
            //标题右侧
            titleRight: React.PropTypes.string.isRequired,
            //客服
            callNumber: React.PropTypes.string.isRequired
        },

        render: function () {
            return <div>
                <div className="title_cell">
                    <span className="title"> {this.props.title} </span>
                    <span className="btn_close fr" onclick={ window.close() }> {this.props.titleRight} </span>
                </div>

                <div className="background_while hg25 f_s_14 bb_d8 p20">
                    <div className="f_w_700 t_a_c mb_08">{this.props.data.area_name}</div>
                    <div className="m00_a">
                        <div className="color_33"><p>充电桩编号：</p><span
                            className="color_99">{this.props.data.third_party_pile_id}</span></div>
                        <div className="color_33"><p>充电桩类型：</p><span className="color_99">{this.props.data.dc_ac}</span>
                        </div>
                        <div className="color_33"><p>接口标准：</p><span
                            className="color_99">{this.props.data.interface_standards.type}</span></div>
                        <div className="color_33"><p>电&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp流：</p><span
                            className="color_99">{this.props.data.ampere}</span></div>
                        <div className="color_33"><p>电&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp压：</p><span
                            className="color_99">{this.props.data.volta}</span></div>
                        <div className="color_33"><p>额定功率：</p><span className="color_99">{this.props.data.power}</span>
                        </div>
                    </div>

                </div>
                <div className="background_while hg25 f_s_14 color_99 bb_d8 mt_10">
                    <div className="fl hg25">
                        <div className="money_icon fl"></div>
                        <p className="d_i_b f_s_14 color_45">充电费用：</p>
                    </div>
                    <div className="w_55 d_i_b l_h_25 m_l_7p">{this.props.data.pile_fees.fee_start}
                        - {this.props.data.pile_fees.fee_end} {this.props.data.total_price}元/度
                    </div>
                </div>
                <div className="background_while hg25 bb_d8 mb_40 f_s_12">若有疑问，请拨打{this.props.callNumber}
                    <a className="phone_btn fr m_r_15" href={this.props.callNumber}></a><i className="sg"></i>
                </div>
                <div className="charging_start_btn t_a_c">立即充电</div>
            </div>;
        }
    }
);

class ChargeStyle extends Component {

    constructor(props) {
        super(props);
        // this.state = {data: []};
        this.state = {
            datas: [] // 列表数据
        };
    }

    componentWillMount() {
        fetchFindPile('ZC0123456789').then(res => {
            // this.setState(data: res.items)
            // {data: res.item}
            this.setState({
                datas: res.items
            })
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.datas.map((item) => {
                        return (
                            <Link>
                                <MChargeStyle data={item} title="立即充电" titleRight="关闭" callNumber="400-030-7759"/>
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}

export default ChargeStyle;
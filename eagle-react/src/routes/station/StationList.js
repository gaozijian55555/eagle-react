/**
 * Created by ios001 on 2017/7/10.
 */

import React, { Component } from 'react';
import './Station.css';
import {Link} from 'react-router'
import register from '../../service/registerServiceWorker'
import { fetchStationList } from '../../service/getData'

import star_y_png from '../../images/Star_Icon_y_big@2x.png'
import star_n_png from '../../images/Star_Icon_n_big@2x.png'
import address_png from '../../images/site_icon.png'
import pile_png from '../../images/Community_Serve_List.png'
import right_png from '../../images/right_btn@2x.png'

var StationListCell = React.createClass({

    proptypes: {
        datas: React.PropTypes.object.isRequired,
    },

    render: function () {
        var pile_fees = this.props.datas.pile_fees;

        return <div className="list-content">
            <div className="padding h20">
                <span className="fl fs18"> {this.props.datas.name} </span>
                <span className="fr fs15"> {parseFloat(this.props.datas.current_distance).toFixed(2)}km </span>
            </div>
            <div className="padding h20">
                <div className="fl">
                    <img src={star_y_png} className="content-star" alt=""/>
                    <img src={star_y_png} className="content-star" alt=""/>
                    <img src={star_y_png} className="content-star" alt=""/>
                    <img src={star_y_png} className="content-star" alt=""/>
                    <img src={star_n_png} className="content-star" alt=""/>
                    <span className="fs16 color_72"> ({this.props.datas.comment_sum}) </span>
                </div>
                <span className="fs15 fr"> 充电: {pile_fees.length?pile_fees[0].total_price:1.8}元/度 </span>
            </div>
            <div className="padding">
                <div className="fl">
                    <img src={address_png} alt="" className="content-location"/>
                    <span className="fs15 color_72"> {this.props.datas.street_address} </span>
                </div>
                <div className="fr">
                    <img src={pile_png} alt="" className="content-oil"/>
                    <span className="fs18 color_red"> {this.props.datas.free_charing_space} </span>
                    <span className="fs15 color_72"> /{this.props.datas.total_charing_space} </span>
                </div>
            </div>
            <div className="padding h20 border_t mt10 cf">
                <span className="fs15 color_blue fl"> 详情 </span>
                <img src={right_png} className="content-right fr" alt=""/>
            </div>
        </div>;
    }
});

export default class StationList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datas: [] // 列表数据
        };
    }

    componentWillMount() {

        fetchStationList(1, 'distance').then(res => {
            this.setState({
                datas: res.items
            })
        })
    }

    render() {
        return (
            <div className="list_bg">
                <Link to="/">
                    <div hidden = {this.state.datas.length}> 正在加载充电站信息,请稍后... </div>
                    {this.state.datas.map((item) => {
                        return (
                            <Link to='/ops_personal'>
                                <StationListCell datas={item}> </StationListCell>
                            </Link>
                        )
                    })}
                </Link>

                <div className="bg-bottom"></div>
            </div>
        );
    }
}

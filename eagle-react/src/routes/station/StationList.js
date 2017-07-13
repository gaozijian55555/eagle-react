/**
 * Created by ios001 on 2017/7/10.
 */

import React, { Component } from 'react';
import './Station.css';
import {Link} from 'react-router'
import register from '../../service/registerServiceWorker'
import { fetchStationList } from '../../service/getData'

import start_png from '../../images/star_icon_y.png'
import address_png from '../../images/site_icon.png'
import pile_png from '../../images/Community_Serve_List.png'
import right_png from '../../images/Right_arrow_btn.png'

var StationListCell = React.createClass({

    proptypes: {
        datas: React.PropTypes.object.isRequired,
    },

    render: function () {

        return <div className="list-content">
            <div className="padding h20">
                <span className="fl fs20"> {this.props.datas.name} </span>
                <span className="fr fs15"> {parseFloat(this.props.datas.current_distance).toFixed(2)}km </span>
            </div>
            <div className="padding h20">
                <div className="fl">
                    <img src={start_png} className="content-star" alt=""/>
                    <img src={start_png} className="content-star" alt=""/>
                    <img src={start_png} className="content-star" alt=""/>
                    <img src={start_png} className="content-star" alt=""/>
                    <img src={start_png} className="content-star" alt=""/>
                    <span> ({this.props.datas.comment_sum}) </span>
                </div>
                <span className="fs15 fr"> 充电:1.8元/度 </span>
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

class StationList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datas: [] // 列表数据
        };
    }

    componentWillMount() {
        //出生了，可以给我数据和设置我的状态
        fetchStationList(1, 'distance').then(res => {
            this.setState({
                datas: res.items
            })
        })
    }
    // componentDidMount() {
    //     请求站点列表数据
    //     fetchStationList(1, 'distance').then(res => {
    //         this.setState({
    //             datas: res.items
    //         })
    //     })
    // }

    render() {
        return (
            <div className="list_bg">
                {/* <div hidden = {this.state.datas.count}> 正在加载... </div> */}
                <Link to="/">
                    {this.state.datas.map((item) => {
                        return (
                            <StationListCell datas={item} > </StationListCell>
                        )
                    })}
                </Link>
            </div>
        );
    }
}

export default StationList;
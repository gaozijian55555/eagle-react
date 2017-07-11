/**
 * Created by ios001 on 2017/7/10.
 */

import React, { Component } from 'react';
import './Station.css';
import {Link} from 'react-router'
import register from '../../service/registerServiceWorker'
import {stationList} from '../../service/getData'

import start_png from '../../images/star_icon_y.png'
import address_png from '../../images/site_icon.png'
import pile_png from '../../images/Community_Serve_List.png'
import right_png from '../../images/Right_arrow_btn.png'

var StationListCell = React.createClass({

    proptypes: {
        station_name: React.PropTypes.string.isRequired,
        dis: React.PropTypes.string.isRequired,
    },

    render: function(){
        return <div className="list-content">
            <div className="padding h20">
                <span className="fl fs20"> {this.props.station_name} </span>
                <span className="fr fs15"> {this.props.dis} </span>
            </div>
            <div className="padding h20">
                <div className="fl">
                    <img src={start_png} className="content-star" alt=""/>
                    <img src={start_png} className="content-star" alt=""/>
                    <img src={start_png} className="content-star" alt=""/>
                    <img src={start_png} className="content-star" alt=""/>
                    <img src={start_png} className="content-star" alt=""/>
                    <span> (5) </span>
                </div>
                <span className="fs15 fr"> 充电:2.0元/度 </span>
            </div>
            <div className="padding">
                <div className="fl">
                    <img src={address_png} alt="" className="content-location"/>
                    <span className="fs15 color_72"> 联航路1588号 </span>
                </div>
                <div className="fr">
                    <img src={pile_png} alt="" className="content-oil"/>
                    <span className="fs18 color_red"> 0 </span>
                    <span className="fs15 color_72"> /1 </span>
                </div>
            </div>
            <div className="padding h20 border_t mt10 cf">
                <span className="fs15 color_blue fl"> 详情 </span>
                <img src={right_png} className="content-right fr" alt=""/>
            </div>
        </div> ;
    }
});



class StationList extends Component {

    componentDidMount () {
        stationList().then(res => {
            this.setState({
                items : res.item,
            })
        });
    }

    render() {
        return (
            <div className="list_bg">

                <Link to="/" >
                    <StationListCell station_name = "863软件园11号别墅" dis = "0.13km" > </StationListCell>
                </Link>
                <Link to="/" >
                    <StationListCell station_name = "联航路软件产业基地" dis = "0.15km" > </StationListCell>
                </Link>
                <Link to="/" >
                    <StationListCell station_name = "联航路软件产业基地" dis = "0.13km" > </StationListCell>
                </Link>
                <Link to="/" >
                    <StationListCell station_name = "联航路软件产业基地" dis = "0.13km" > </StationListCell>
                </Link>
                <Link to="/" >
                    <StationListCell station_name = "联航路软件产业基地" dis = "0.13km" > </StationListCell>
                </Link>

            </div>
        );
    }
}

export default StationList;
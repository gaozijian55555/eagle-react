/**
 * Created by ios001 on 2017/7/11.
 */
import React, { Component } from 'react';
import '../station/Station.css';
import {Link} from 'react-router'

function HelloComponent(props, /* context */) {
    
    return <div className="list_bus_content">
        <div className="bus_top">
            <span className="fs15 fl"> {props.time}  {this.props.line_name} </span>
            <span className="bus_work fr"> 工作日 </span>
        </div>
        <div className="fl ">
        </div>
    </div> ;
}

{/*var BusListCell = React.createClass({
    render: function() {
        return <div className="list_bus_content">
            <div className="bus_top">
                <span className="fs15 fl"> {this.props.time}  {this.props.line_name} </span>
                <span className="bus_work fr"> 工作日 </span>
            </div>
            <div className="fl ">


            </div>
        </div> ;
    }
});*/}

class BusList extends Component {
    render() {
        return (
            <div className="list_bg">

                <Link to="/">
                    ReactDOM.render(<HelloComponent name="云部落大巴1号线" time = "07:30"/>, mountNode)
                    {/*<BusListCell line_name = "云部落大巴1号线" time = "07:30"></BusListCell>*/}
            </Link>
                <Link to="/">
                    {/*<BusListCell line_name = "云部落大巴2号线" time = "08:30"></BusListCell>*/}
                    ReactDOM.render(<HelloComponent name="云部落大巴2号线" time = "08:30"/>, mountNode)
                </Link>

            </div>
        );
    }
}

export default BusList;
// modules/App.js
//commit
import React from 'react'
import { Link } from 'react-router'
import Button from 'antd/lib/button';
import 'antd/lib/button/style';
import 'antd/dist/antd.css';
export default React.createClass({
    hahaha:function () {
        alert("王新伟");
    },
    render: function() {
        return (
            <div>
                <Button onClick={this.hahaha}>点我啊</Button>>
                 <h1> Eagle-React Host View</h1>
                <ul role="nav">
                    <li><Link to="/" property="">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/station_list">Station List</Link></li>
                    <li><Link to="/bus_list">Bus List</Link></li>
                    <li><Link to="/charge">Charge</Link></li>
                </ul>
            </div>
        )
    }
})
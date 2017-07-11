// modules/App.js
//commit
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return (
            <div>
                <h1> Eagle-React Host View</h1>
                <ul role="nav">
                    <li><Link to="/" property="">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/station_list">Station List</Link></li>
                    <li><Link to="/bus_list">Bus List</Link></li>
                </ul>
            </div>
        )
    }
})
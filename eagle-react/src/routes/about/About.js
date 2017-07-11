/**
 * Created by ios001 on 2017/7/11.
 */
// modules/About.js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return <li>
            <Link to="/">Back To Home</Link>
            <div>
                <p> 充电队长 React App </p>
            </div>
        </li>
    }
})
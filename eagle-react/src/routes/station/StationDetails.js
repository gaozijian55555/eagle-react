/**
 * Created by WXW on 2017/7/12.
 */
import React, {Component} from 'react';
import {Link} from 'react-router'
import './Station.css';

export default class  TopComponent extends React.Component{
    render() {
        return (
            <div >
                <h2>{this.props.params.name}</h2>
                <div >
                </div>
            </div>
        );
    }
}

TopComponent.propTypes = {
    address: React.PropTypes.string.isRequired,
    phoneNumber:React.PropTypes.string.isRequired,
    distance:React.PropTypes.string.isRequired,
}
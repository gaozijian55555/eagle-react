/**
 * Created by WXW on 2017/7/18.
 */
import React from 'react';
import { Link } from 'react-router';

import './PopupComponents.css'

export default  class ConfirmWins extends React.Component {
    constructor(props) {
        super(props);
        // 设置 默认属性值
        this.state = {
            text:props.desc,
        };
        // ES6 类中函数必须手动绑定
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    render() {
        const props = this.props;
        var text = this.state.text
        return (
            <div className="confirm-wins-container" >
                <div className="wins">
                    <div className="titleDiv">
                        <p className="title">{props.title}</p>
                    </div>
                    <input className="inputStyle" type="text" value={text} onChange={this.handleChange}/>
                    <div className="fn-btn text-center">
                        {
                            props.leftBtn ? <span className="pop-btn left-btn" onClick={props.onLeftClick}>
                            {props.leftBtn.text}
                            </span> : ''
                        }
                        <span className="pop-btn right-btn" onClick={props.onRightClick}>
                            {props.rightBtn.text}
                            </span>
                    </div>
                </div>
            </div>
        );
    }
}

ConfirmWins.propTypes = {
    title: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired,
    leftBtn: React.PropTypes.object,
    rightBtn: React.PropTypes.object.isRequired,
    onLeftClick: React.PropTypes.func,
    onRightClick: React.PropTypes.func.isRequired,
};

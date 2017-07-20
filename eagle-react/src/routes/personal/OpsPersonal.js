/**
 * Created by WXW on 2017/7/20.
 */
import React, {Component} from 'react';
import './OpsPersonal.css';
import {Link} from 'react-router'
import logoBgIcon from '../../images/Logo_Bg@2x.png'
import Button from 'antd-mobile/lib/button'
import {fetchOpsLoginOut} from  '../../service/getData'
export default class OpsPersonalComponent extends Component {
    constructor(props) {
        super(props);

    }
    loginOut(){
        alert('退出登录')
        fetchOpsLoginOut().then(res =>{
            alert('退出登录成功')
            window.webkit.messageHandlers.LoginOutSucceeds.postMessage({body:'退出登录成功'});
        })
    }
    render() {

        return (
            <div>
               <div className="opsPersonalLogoBgDiv">
                   <img src={logoBgIcon} className="opsPersonalLogoBg"/>
                   <p className="opsPersonalUserName">登录账号：guowsh</p>
                   <Button className="opsPersonalLoginOut btn" type="primary" onClick={this.loginOut.bind(this)}>
                       退出登录
                   </Button>
               </div>
            </div>
        )
    }
}
/**
 * Created by ios001 on 2017/7/19.
 */
import React, { Component } from 'react';

import SearchBar from 'antd-mobile/lib/search-bar'
import Button from 'antd-mobile/lib/button'

var OrderListCell = React.createClass({
    render(){
        return <div>


        </div>
    }
});

export default class OrderList extends Component {

    render() {
        return (
            <div>
                <SearchBar placeholder="输入站点名称、三方桩ID进行检索"
                           showCancelButton={false}
                />
                <div >
                    <Button className="btn fl btn_left" type="primary" onClick={e => console.log(e)}>
                        请求中: 个
                    </Button>

                    <Button className="btn fr btn_right" type="primary" onClick={e => console.log(e)}>
                        准备就绪: 个
                    </Button>
                </div>
                <div >
                    <Button className="btn fl btn_left" type="primary" onClick={e => console.log(e)}>
                        充电中: 个
                    </Button>

                    <Button className="btn fr btn_right" type="primary" onClick={e => console.log(e)}>
                        结束中: 个
                    </Button>
                </div>

            </div>
        )
    }
}
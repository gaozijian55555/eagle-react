// modules/App.js
//commit
import React from 'react'
import { Link } from 'react-router'
import Button from 'antd-mobile/lib/button'
import 'antd-mobile/lib/button/style'

import TabBar from 'antd-mobile/lib/tab-bar'
import {Menu} from './Menu'
import 'antd-mobile/dist/antd-mobile.css'

import NavBar from 'antd-mobile/lib/nav-bar'
import Icon from 'antd-mobile/lib/icon'
import 'antd-mobile/lib/icon/style'

export default React.createClass({

    getInitialState() {
        return {
            selectedTab: '/station_list',
        };
    },

    renderContent() {

        if (this.state.selectedTab === '/station_list')
            return <div> 1 </div>;
        if (this.state.selectedTab === '/charge')
            return <div> 2 </div>;
        if (this.state.selectedTab === '/bus_list')
            return <div> 3 </div>;
    },

    renderMenu()
    {
        let menus = [];
        let i = 0;

        for (i = 0; i < 3; i++) {
            let m = Menu[i];
            menus.push(
                <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/'+m.icon+'.png' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/'+m.selected+'.png' }}
                    title={m.title}
                    key={m.url}
                    selected={this.state.selectedTab===m.url}
                    onPress={() => {
                        this.setState({
                            selectedTab: m.url,
                        });
          }}>
                    {this.renderContent()}
                </TabBar.Item>
            );
        }
        return menus;
    },

    render()
    {
        let menus = this.renderMenu();
        return (

            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
            >
                {menus}
            </TabBar>
        );

    },
});
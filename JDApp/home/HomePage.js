/**
 * Created by admin on 2017/7/27.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Alert
} from 'react-native';
import ViewPager from 'react-native-viewpager'
import MenuButton from "./MenuButton";

const BANNER_IMGS = [
    require('../images/banner/1.jpg'),
    require('../images/banner/2.jpg'),
    require('../images/banner/3.jpg'),
    require('../images/banner/4.jpg')
];

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        // 用于构建DataSource对象
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        // 实际的DataSources存放在state中
        this.state = {
            dataSource: dataSource.cloneWithPages(BANNER_IMGS)
        }
    }

    _renderPage(data, pageID) {
        return (
            <Image
                source={data}
                style={styles.page}/>
        );
    }

    _onMenuClick(title , tag){
        Alert.alert('提示','你点击了：'+title+'\n'+' Tag：'+tag);
    }

    /**
     *isLoop：是否循环播放，按照示例代码设置即可
     *autoPlay：是否自动播放，按照示例代码设置即可
     *locked: 设置为true即禁用ViewPager的点击(true:禁用触摸滚动)
     *onChangePage: 页面切换的回调函数
     *renderPageIndicator: 自定义指示器样式的渲染
     *animation：如果觉得原始的效果不满意，可以在这个字段中设置一个函数，自定义动画效果
     */

    render(){
        return (
            <View style={styles.flex}>
                <View style={styles.viewPager_H}>
                    <ViewPager
                        style={styles.viewPager_H}
                        dataSource={this.state.dataSource}
                        renderPage={this._renderPage}
                        isLoop={true}
                        autoPlay={true}
                    />
                </View>
                <View style={styles.menuView}>
                    <MenuButton
                        showText="我的关注"
                        renderIcon={require('../images/home_icons/wdgz.png')}
                        tag="wdgz"
                        event={this._onMenuClick}
                    />
                    <MenuButton
                        renderIcon={require('../images/home_icons/wlcx.png')}
                        showText={'物流查询'}
                        tag={'wlcx'}
                        event={this._onMenuClick}/>

                    <MenuButton
                        renderIcon={require('../images/home_icons/cz.png')}
                        showText={'充值'}
                        tag={'cz'}
                        event={this._onMenuClick}/>

                    <MenuButton
                        renderIcon={require('../images/home_icons/dyp.png')}
                        showText={'电影票'}
                        tag={'dyp'}
                        event={this._onMenuClick}/>
                </View>
                <View style={styles.menuView}>
                    <MenuButton
                        showText={'游戏充值'}
                        renderIcon={require('../images/home_icons/yxcz.png')}
                        tag={'yxcz'}
                        event={this._onMenuClick}
                    />
                    <MenuButton
                        renderIcon={require('../images/home_icons/xjk.png')}
                        showText={'小金库'}
                        tag={'xjk'}
                        event={this._onMenuClick}/>

                    <MenuButton
                        renderIcon={require('../images/home_icons/ljd.png')}
                        showText={'领京豆'}
                        tag={'ljd'}
                        event={this._onMenuClick}/>

                    <MenuButton
                        renderIcon={require('../images/home_icons/gd.png')}
                        showText={'更多'}
                        tag={'gd'}
                        event={this._onMenuClick}/>
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    flex:{
        flex:1
    },
    page: {
        flex: 1,
        height: 130,
        resizeMode: 'stretch',
    },
    viewPager_H:{
        height: 130
    },
    menuView: {
        flexDirection: 'row',
        marginTop: 10
    },
});
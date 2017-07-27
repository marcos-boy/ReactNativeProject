/**
 * Created by admin on 2017/7/26.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Image,
    Platform
} from 'react-native';
export default class Header extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('./images/header/header_logo.png')}
                    style={styles.logo}
                />
                <View style={styles.searchBox}>
                    <Image
                        source={require('./images/header/icon_search.png')}
                        style={styles.searchIcon}
                    />
                    <TextInput
                        keyboardType='web-search'
                        placeholder='搜索京东商品/店铺'
                        underlineColorAndroid='transparent'
                        style={styles.inputText}
                    />
                    <Image
                        source={require('./images/header/icon_voice.png')}
                        style={styles.voiceIcon}
                    />
                </View>
                <Image
                    source={require('./images/header/icon_qr.png')}
                    style={styles.scanIcon}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',   // 水平排布
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
        height: Platform.OS === 'ios' ? 68 : 48,   // 处理iOS状态栏
        backgroundColor: '#d74047',
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
    },
    logo:{
        width: 64,
        height: 24,
        resizeMode: 'stretch'
    },
    searchBox:{
        height: 30,
        marginLeft: 8,
        marginRight: 12,
        backgroundColor: 'white',
        borderRadius: 5,
        flex: 1,// 类似于android中的layout_weight,设置为1即自动拉伸填充
        alignItems: 'center',
        flexDirection: 'row'
    },
    searchIcon:{
        height: 16.7,
        width: 16.7,
        marginRight: 6,
        marginLeft: 6,
        resizeMode: 'stretch'
    },
    inputText:{
        flex:1,
        backgroundColor: 'transparent',
        fontSize: 14,
        padding:0
    },
    voiceIcon:{
        marginLeft: 5,
        marginRight: 8,
        width: 15,
        height: 20,
        resizeMode: 'stretch'
    },
    scanIcon:{
        width: 26.7,
        height: 26.7,
        resizeMode: 'stretch'
    }

});
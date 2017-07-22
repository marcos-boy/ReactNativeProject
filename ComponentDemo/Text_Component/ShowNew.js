/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import Header from "./header"
import List from "./List";
import ImportantNews from "./ImportantNews";


export default class ShowNew extends Component {
    render() {
        return (
            <View style={styles.flex}>
                <Header/>
                <List title='宇航员在太空宣布“三体” 获奖'></List>
                <List title='NASA发短片纪念火星征程50年'></List>
                <List title='男生连续做一周苦瓜吃吐女友'></List>
                <List title='女童遭鲨鱼袭击又下海救伙伴'></List>
                <ImportantNews news={[
                    '1、刘慈欣《三体》获“雨果奖” 为中国作家首次',
                    '2、京津翼协同发展点位明确： 北京无经济中心表述',
                    '3、好奇宝宝第一次淋雨， 父亲用镜头记录了下来',
                    '4、人民邮电出版社即将出版《React Native入门与实战》，读者可以使用JavaScript开发原生应用'
                ]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1
    }
});
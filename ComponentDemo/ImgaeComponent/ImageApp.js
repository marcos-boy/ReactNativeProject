/**
 * Created by admin on 2017/7/21.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import MyImage from './MyImage'

var imgs= [
    'http://www.ituring.com.cn/bookcover/1442.796.jpg',
    'http://www.ituring.com.cn/bookcover/1668.553.jpg',
    'http://www.ituring.com.cn/bookcover/1521.260.jpg'
]
export default class ImageApp extends Component{
    render(){
        return (
            <View style={styles.flex}>
                <MyImage imgs={imgs}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    flex:{
        flex : 1,
        alignItems:'center',
        marginTop:40,
    },

});
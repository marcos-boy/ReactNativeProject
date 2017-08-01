/**
 * Created by admin on 2017/7/24.
 */

import React,{Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import HomeScreen from './Screen/HomeScreen';
export default class App extends Component{
    render(){
        return (
            <View style={styles.flex}>
               <HomeScreen/>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    flex:{
        flex:1
    }
})
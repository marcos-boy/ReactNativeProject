/**
 * Created by admin on 2017/7/20.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import Search from "./Search";
export default class App extends Component{
    render(){
        return (
          <View style={[styles.flex,styles.topStatus]}>
              <Search/>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    flex:{
        flex:1,
    },
    topStatus:{
        marginTop:10
    }
});
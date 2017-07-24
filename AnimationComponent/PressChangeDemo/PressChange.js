/**
 * Created by admin on 2017/7/22.
 */
import React, { Component } from 'react';
import {
    LayoutAnimation,
    NativeModules,
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';

// Android 使用 LayoutAnimation 需要这句话
const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
export default class PressChange extends Component{
    constructor(props){
        super(props);
        this.state={
            w:150,
            h:150,
            add:true
        };
    }
    _onPress(){
        LayoutAnimation.spring;
        if(this.state.add){
            this.setState({w : this.state.w+15,h : this.state.h+15, add : !this.state.add});
        }else {
            this.setState({w : this.state.w-15,h : this.state.h-15, add : !this.state.add});
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={[styles.box,{width:this.state.w,height:this.state.h}]}>
                    <TouchableOpacity
                        onPress={()=>this._onPress()}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Press me!
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(123,123,234,0.3)'
    },
    box:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'red'
    },
    button:{
        paddingHorizontal:20,
        paddingVertical:20,
        backgroundColor:'black',

    },
    buttonText:{
        color:'#fff',
        fontWeight:'bold'
    }
});
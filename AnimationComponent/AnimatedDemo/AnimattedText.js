/**
 * Created by admin on 2017/7/22.
 */
import React,{Component} from 'react';
import {
    Animated,
    StyleSheet,
    Easing,
    Text
} from 'react-native'
export default class AnimattedText extends Component{

    constructor(props){
        super(props);
        this.state={
            fadeInOpacity:new Animated.Value(0), // 初始值
        }
    }
    componentDidMount(){
        Animated.timing(this.state.fadeInOpacity,{
            toValue:1,// 目标值
            duration:2500,// 动画时间
            easing:Easing.linear,// 缓动函数
            useNativeDriver: true,
        }).start();
    }

    render(){
        return (
            <Animated.View
                style={[styles.animation,{opacity:this.state.fadeInOpacity}]}
            >
                <Text style={styles.text}>
                    悄悄的，我出现了
                </Text>
            </Animated.View>
        );
    }
}
const styles = StyleSheet.create({
   animation:{
       flex:1,
       alignItems:'center',
       justifyContent:'center',
       backgroundColor:'white'
   },
   text:{
       fontSize:30,
   }
});
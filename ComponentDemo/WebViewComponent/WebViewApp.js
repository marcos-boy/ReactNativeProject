/**
 * Created by admin on 2017/7/21.
 */
import React,{Component}from 'react';
import {
    StyleSheet,
    View,
    WebView,
    Dimensions
} from 'react-native';
var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;
const url='http://weibo.com/vczero';
export default class WebViewApp extends Component{
    render(){
        return(
            <View style={styles.container}>
                <WebView
                    injectedJavaScript="alert{'欢迎使用React Native'}"
                    bounces={false}
                    source={{uri:url}}
                    style={{width:width,height:height}}
                >
                </WebView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
});
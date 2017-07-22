/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import ShowNew from "./Text_Component/ShowNew"
import App from "./TextInput_Component/App";
import ImageApp from "./ImgaeComponent/ImageApp";
import WebViewApp from "./WebViewComponent/WebViewApp";

export default class setup extends Component {
    render() {
        return (
            <View style={{flex:1}}>
               {/*<App/>*/}
               {/*<ShowNew/>*/}
               {/*<ImageApp/>*/}
               <WebViewApp/>
            </View>
        );
    }
}

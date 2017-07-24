/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import AnimattedText from "./AnimatedDemo/AnimattedText";
import FadeInView from "./FadeInViewDemo/FadeInView";
import PressChange from "./PressChangeDemo/PressChange";
import InterpolateText from "./InterpolateTextDemo/InterpolateText";
import ThreeTextAnimated from "./ThreeTextAnimatedDemo/ThreeTextAnimated";

export default class setup extends Component{
    render(){
        return (
            <View style={styles.flex}>
                {/*<AnimattedText/>*/}

              {/*<FadeInView style={{height:50,backgroundColor:'powderblue',flex:1}}>*/}
                {/*<Text style={styles.text}>*/}
                  {/*Fading in*/}
                {/*</Text>*/}
              {/*</FadeInView>*/}

              {/*<PressChange/>*/}

              {/*<InterpolateText/>*/}

              <ThreeTextAnimated/>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    flex:{
        flex:1
    },
    text:{
        fontSize:28,
        textAlign:'center',
        margin:10
    }
});

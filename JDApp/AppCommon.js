/**
 * Created by admin on 2017/7/26.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import MainScreen from "./MainScreen";

export default class APPCommons extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MainScreen/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
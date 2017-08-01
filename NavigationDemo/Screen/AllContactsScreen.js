/**
 * Created by admin on 2017/7/24.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
export default class AllContactsScreen extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>List of all contacts</Text>
                <Button
                    onPress={() =>{navigate('Chat',{user:'Lucy'})}}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}
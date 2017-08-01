/**
 * Created by admin on 2017/7/24.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import {TabNavigator} from 'react-navigation'
import AllContactsScreen from './AllContactsScreen'
class RecentChatsScreen extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>List of recent chats</Text>
                <Button
                    onPress={() =>{navigate('Chat',{user:'Ami'})}}
                    title="Chat with Ami"
                />
            </View>
        );
    }
}
const MainScreenNavigator = TabNavigator({
    Recent:{screen:RecentChatsScreen},
    All:{screen:AllContactsScreen},
});
MainScreenNavigator.navigationOptions = {
    title: 'My Chats',
};
export default MainScreenNavigator;


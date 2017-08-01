/**
 * Created by admin on 2017/7/24.
 */
import React from 'react';

import { StackNavigator } from 'react-navigation';
import ChatScreen from './ChatScreen'
import RecentChatsScreen from './RecentChatsScreen'

const SimpleApp = StackNavigator({
    Home: { screen: RecentChatsScreen },
    Chat: { screen: ChatScreen },
});
export default SimpleApp;
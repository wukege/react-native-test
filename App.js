/**
 * Created by kege on 2017/11/20.
 */
import React, {Component} from 'react';
import {Text} from 'react-native';
import News from './app/pages/News/News';
import Me from './app/pages/Me/Me';
import Application from './app/pages/Application/Application';
import ChatScreen from './app/pages/ChatScreen/ChatScreen';
import {TabNavigator, StackNavigator} from "react-navigation";

const HomeScreen = TabNavigator({
  News: {screen: News},
  Application: {screen: Application},
  Me: {screen: Me},
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#3e9ce9',
    inactiveTintColor: '#999999',
    showIcon: true,
    indicatorStyle: { //标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
      height: 0
    },
    style: {
      backgroundColor: '#fff'
    }
  }, showIcon: true
});




const App = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
      mode: 'card'
    }
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      headerTitle: "返回",
    },
    mode: 'card',
    headerMode:'screen'
  },
}, {
  initialRouteName: 'Home', // 默认显示界面
});
export default App;
/**
 * Created by kege on 2017/11/20.
 */
import React,{Component} from 'react';
import {Text,Image,View,Button,StyleSheet} from 'react-native';

export default class News extends Component{
  static navigationOptions ={
    title:'消息',
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('../../img/news.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
    ),
  };
  render(){
    const {navigate} = this.props.navigation;
    return (
        <View>
          <Text>Hello, Chat App!</Text>
          <Button
              onPress={() => navigate('Chat')}
              title="Chat with Lucy"
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

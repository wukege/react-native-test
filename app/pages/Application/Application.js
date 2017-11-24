/**
 * Created by kege on 2017/11/20.
 */
import React,{Component} from 'react';
import {Text,Image,StyleSheet} from 'react-native';

export default class Application extends Component{
  static navigationOptions = {
    title:'应用',
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('../../img/application.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
    ),
  }
  render(){
    return <Text>我的应用</Text>
  }
}


const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
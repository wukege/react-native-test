/**
 * Created by kege on 2017/11/20.
 */
import React,{Component} from 'react';
import {Text,Image,StyleSheet} from 'react-native';

export default class Me extends Component{
  static navigationOptions = {
    title:'我',
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('../../img/me.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
    ),}
  render(){
    return <Text>我的介绍</Text>
  }
}


const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
/**
 * Created by kege on 2017/11/20.
 */
import React,{Component} from 'react';
import {Text,Image,View,Button,StyleSheet,Alert} from 'react-native';

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
  constructor(props){
    super(props);

  }
  componentWillMount(){
    fetch('https://api.douban.com/v2/movie/celebrity/1054395')
        .then((response) => response.json())
        .then(resJoin =>{
          Alert.alert('提示',resJoin.mobile_url)
          console.log(resJoin)
        }).catch(error =>{
      console.error(error);
    })
  }
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

/**
 * Created by kege on 2017/11/20.
 */
import React, {Component} from 'react';
import {Text, Alert, View, WebView, StyleSheet} from 'react-native';

export default class ChatScreen extends Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  _error() {
    console.log('onError')
    Alert.alert('提示', 'onError')
  }
  _onLoadStart(){
    Alert.alert('提示', 'onLoadStart')
    console.log('onLoadStart')
  }
  render() {
    return (
        <View style={{flex: 1}}>
          <View><Text>sdafjlaflajsfjlasf</Text></View>
          <WebView style={{width: '100%', height: '100%'}}
                  source={{uri: 'https://www.baidu.com/'}}
                   // source={require('./test.html')}
                   onError={this._error}
                   onLoadStart={this._onLoadStart} />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  red: {
    color: 'red'
  }
});
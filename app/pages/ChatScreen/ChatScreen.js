/**
 * Created by kege on 2017/11/20.
 */
import React, {Component} from 'react';
import {Text, Alert, View, WebView, StyleSheet} from 'react-native';

export default class ChatScreen extends Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  constructor(props) {
    super(props);
    this.state = {
      webViewData: ''
    }
    this.data = 0;
  }
  _error() {
    console.log('onError')
    Alert.alert('提示', 'onError')
  }
  _onLoadStart = () =>{
    Alert.alert('提示', 'onLoadStart')
    console.log('onLoadStart')
  }
  //向html页面发送数据
  sendMessage = () => {
    if (this.webview) {
      this.webview.postMessage('ttt');
    }
  }
  //向html页面发送数据
  sendMessage2(){
    if (this.webview) {
      this.webview.postMessage('ggg');
    }
  }
 //接收WebView JS事件消息
  onMessage = e => {
    alert(e.nativeEvent.data);
  }

  render() {
    return (
        <View style={{flex: 1}}>
          <View><Text style={{fontSize:30,color:'red'}} onPress={this.sendMessage}>postMessage</Text></View>
          {/*<View><Text style={{fontSize:30,color:'red'}} onPress={this.sendMessage2.bind(this)}>postMessage2</Text></View>*/}
          <WebView style={{width: '100%', height: '100%'}}
                  // source={{uri: 'https://www.baidu.com/'}}
                   source={require('./test.html')}
                    ref={webview => { this.webview = webview; }}
                   // ref={'webview'}
                   domStorageEnabled={true}
                   // injectedJavaScript="document.addEventListener('message', function(e) {eval(e.data);});"
                   javaScriptEnabled={true}
                   onMessage={this.onMessage}
           />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  red: {
    color: 'red'
  }
});
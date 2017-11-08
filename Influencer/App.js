import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ToastAndroid
} from 'react-native';
import SpeechAndroid from 'react-native-android-voice';
import Tts from 'react-native-tts';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  async _buttonClick(){
    try{
        //More Locales will be available upon release.
        var spokenText = await SpeechAndroid.startSpeech("Speak yo", SpeechAndroid.INDONESIAN);
        Tts.speak(spokenText);
        ToastAndroid.show(spokenText , ToastAndroid.LONG);
    }catch(error){
        switch(error){
            case SpeechAndroid.E_VOICE_CANCELLED:
                ToastAndroid.show("Voice Recognizer cancelled" , ToastAndroid.LONG);
                break;
            case SpeechAndroid.E_NO_MATCH:
                ToastAndroid.show("No match for what you said" , ToastAndroid.LONG);
                break;
            case SpeechAndroid.E_SERVER_ERROR:
                ToastAndroid.show("Google Server Error" , ToastAndroid.LONG);
                break;
            /*And more errors that will be documented on Docs upon release*/
        }
    }
}
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=> this._buttonClick()}>
          <Image source={{uri:'https://vignette.wikia.nocookie.net/prime-numbers/images/9/90/Blue_Button.png/revision/latest?cb=20150729111716'}} style={styles.button}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button:{
    width: 50,
    height: 50
  }
});

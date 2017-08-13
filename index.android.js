import React from 'react';
import Detector from './components/Detector';
import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Options to be passed to the image picker
const image_picker_options = {

}

const api_key = '';

class identify extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Detector image_picker_options={image_picker_options} apiKey={api_key} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF' //#F5FCFF',
  }
});

AppRegistry.registerComponent('identify', () => identify);

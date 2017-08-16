'use strict'
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Detector from './components/Detector';
// Options to be passed to the image picker
const image_picker_options = {
    title: 'Select Image',
    takePhotoButtonTitle: 'Take Photo',
    chooseFromLibraryButtonTitle: 'Choose from Library...',
    cameraType: 'back', // Use the front or the back camera
    mediaType: 'photo',
    maxWidth: 480,
    quality: 1, // 0 to 1 for specifying the quality of the picture taken
    noData: false,
    path: 'images'
};

const api_key = '547419c178f94bb5b3f392e3069befe5';

class identify extends Component{
    render(){
        return(
          <View style={styles.container}>
            <Detector imagePickerOptions={image_picker_options} apiKey={api_key} />
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

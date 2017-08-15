import React from 'react'

import {
  AppRegistry,
  Component,
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

import NativeModules, {ImagePickerManager} from 'NativeModules';
import Button from './Button';
import RNFetchBlob from 'react-native-fetch-blob';
import _ from lodash;

export default class Detector extends Component{
    // Constructor that is executted before the component is mounted
    constructor(props){
        super(props);
        this.state = {
            // Setting the default photo style
            photo_style: {
                position: 'relative',
                width: 480,
                height: 480
            },
            // Boolean value that is used to determine whether to show the "Detect Faces" button
            has_photo = false,
            photo: null,
            // Used as the data source for constructing face boxes
            face_data: null
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <Image
                    style={this.state.photo_style}
                    source={this.state.photo}
                    resizeMode={'contain'}>
                {this._renderFaceBoxes.call(this)}
                </Image>

                <Button
                    text='Pick Photo'
                    onpress={this._pickImage.bind(this)}
                    button_styles={styles.button}
                    button_text_styles={styles.button_text} />
                {this._renderDetectFaceButton.call(this)}

            </View>
        );
    }



}

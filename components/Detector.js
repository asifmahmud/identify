'use strict';
import React, {Component} from 'react';

import {
  AppRegistry,
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

import NativeModules, {ImagePickerManager} from 'NativeModules';
import Button from './Button';
import RNFetchBlob from 'react-native-fetch-blob';
import _ from 'lodash';

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
            has_photo: false,
            photo: null,
            // Used as the data source for constructing face boxes
            face_data: null
        };
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
                    {this._renderDetectFacesButton.call(this)}
            </View>
        );
    }

    _renderFaceBoxes(){

    }

    _pickImage(){
        this.setState({
            face_data: null;
        });

        ImagePickerManager.showImagePicker(this.props.image_picker_options, (response) =>{
            if (response.error){
                alert("There was an error while getting the image.");
            }
            else{
                let source = {uri: response.uri};
                this.setState({
                    photo_style: {
                        position: 'relative',
                        width: response.width,
                        height: response.height,
                    },
                    has_photo: true,
                    photo: source,
                    photo_data: response.data
                });
            }
        });
    }

    _detectFaces(){
        
    }

    _renderDetectFacesButton(){
        if (this.state.has_photo){
            return (
                <Button
                    text='Detect Faces'
                    onpress={this._detectFaces.bind(this)}
                    button_styles={styles.button}
                    button_text_styles={styles.button_text} />
            );
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#FFF'
    },
    button: {
        margin: 10,
        padding: 15,
        backgroundColor: '#01579B'
    },
    button_text: {
        color: '#FFF',
        fontSize: 20
    }
});

AppRegistry.registerComponent('Detector', () => Detector);

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

'use strict'
import React, {Component} from 'react';

import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class Button extends Component {
    render(){
        return (
            <View>
                <TouchableHighlight
                    underlayColor={'#01579B'}
                    onPress={this.props.onpress}
                    style={this.props.button_styles}>
                        <View>
                            <Text style={this.props.button_text_styles}> {this.props.text} </Text>
                        </View>
                </TouchableHighlight>
            </View>
        );
    }
}

AppRegistry.registerComponent('Button', () => Button);

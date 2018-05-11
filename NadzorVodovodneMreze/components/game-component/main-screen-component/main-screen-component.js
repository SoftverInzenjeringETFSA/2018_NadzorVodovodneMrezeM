import React, {Component} from 'react';
import styles from './styles';
import {AppRegistry} from 'react-native';

export default class mainscreencomponent {
    static navigationOptions = {
        title: 'Igrica'
    }
    render() {
        return (
            <View>
            </View>
        );
    }
}

AppRegistry.registerComponent('mainscreencomponent', () => mainscreencomponent);
import React, {Component} from 'react';
import styles from './styles';
import {AppRegistry} from 'react-native';

export default class guestinterfacecomponent {
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

AppRegistry.registerComponent('guestinterfacecomponent', () => guestinterfacecomponent);
import React, {Component} from 'react';
import styles from './styles';
import {AppRegistry, View, Text} from 'react-native';

export default class gamecomponent extends Component {
    static navigationOptions = {
        title: 'Igrica'
    }
    render() {
        return (
            <View>
                <Text> component works </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('gamecomponent', () => gamecomponent);
import React, {Component} from 'react';
import styles from './styles';
import {AppRegistry, View, Text} from 'react-native';

export default class guestinterfacecomponent extends Component {
    static navigationOptions = {
        title: 'Podaci o vodovodnoj mreži'
    }
    render() {
        return (
            <View>
                <Text> component works </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('guestinterfacecomponent', () => guestinterfacecomponent);
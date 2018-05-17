import React, {Component} from 'react';
import styles from './styles';
import {AppRegistry, View, Text} from 'react-native';

export default class viewchangedetailscomponent extends Component {
    static navigationOptions = {
        title: 'Detalji izmjene'
    }

    static activeChange; 

    render() {
        return (
            <View>
                <Text>aa</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('viewchangedetailscomponent', () => viewchangedetailscomponent);
import React, {Component} from 'react';
import styles from './styles';
import { AppRegistry, View, Text } from 'react-native';

export default class userinterfacecomponent extends Component {
    static navigationOptions = {
        title: 'Podaci o vodovodnoj mreži'
    }
    render() {
        return (
            <View>
                <Text> UI component works </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('userinterfacecomponent', () => userinterfacecomponent);
import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import styles from './styles';
import { AppRegistry, View, Text, FlatList, Button } from 'react-native';

import PipeService from '../../services/pipe-service';
import insertchangescomponent from './insert-changes-component/insert-changes-component';
import viewchangescomponent from './view-changes-component/view-changes-component';
import viewmessagescomponent from './view-messages-component/view-messages-component';

export class userinterfacecomponent extends Component {
    data;
    pipeService = new PipeService();

    componentWillMount() {
        this.setState({
            isLoading: true
        })
        this.onPress = this.onPress.bind(this);
    }

    componentDidMount() {
        this.loadData().then(() => {
            this.setState({
                isLoading: false
            });
        }).catch(err => {
            console.log(err);
        });
    }

    onPress(txt) {
		this.props.navigation.navigate(txt);
	} 

    async loadData() {
        let data = await this.pipeService.getAllPipes();
        console.log(data);
    }

    static navigationOptions = {
        title: 'Podaci o vodovodnoj mreži'
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loaderContainer}> 
                    <Text style={styles.loaderText}>
                        Loading...
                    </Text>
                </View>
            );
        }
        return (
            <View style = { styles.container }>
                <View style = { styles.buttonsContainer }>
                    <View style = { styles.buttonContainer }>
                        <Button onPress = { () => this.onPress('InsertChanges') } title = 'Unos izmjena' style = { styles.button } />
                    </View> 
                    <View style = { styles.buttonContainer }>
                        <Button onPress = { () => this.onPress('ViewChanges') } title = 'Izmjene na mreži' style = { styles.button } />
                    </View>
                    <View style = { styles.buttonContainer }>
                        <Button onPress = { () => this.onPress('ViewMessages') } title = 'Poruke' style = { styles.button } />
                    </View>
                </View>
            </View> 
        );
    }
}

export default Project = StackNavigator({
    UserInterfaceComponent: { screen: userinterfacecomponent },
    InsertChanges: {screen: insertchangescomponent},
    ViewChanges: { screen: viewchangescomponent },
    ViewMessages: { screen: viewmessagescomponent }
}, {
    headerMode: 'none'
});

AppRegistry.registerComponent('userinterfacecomponent', () => userinterfacecomponent);
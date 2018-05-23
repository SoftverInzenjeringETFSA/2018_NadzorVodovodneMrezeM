import React, {Component} from 'react';
import styles from './styles';
import { AppRegistry, View, Text, FlatList, Button, ActivityIndicator } from 'react-native';
import {Actions} from 'react-native-router-flux';
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
    async loadData() {
        let data = await this.pipeService.getAllPipes();
        console.log(data);
    }
    render() {
        if (this.state.loading) {
            return ( 
                <View style={styles.container}> 
                    <ActivityIndicator size="large" />
                </View>
            );
        }
        return (
            <View style = { styles.container }>
                <View style = { styles.buttonsContainer }>
                    <View style = { styles.buttonContainer }>
                        <Button onPress = { () => Actions.InsertC() } title = 'Unos izmjena' style = { styles.button } />
                    </View> 
                    <View style = { styles.buttonContainer }>
                        <Button onPress = { () => Actions.ViewC() } title = 'Izmjene na mreži' style = { styles.button } />
                    </View>
                    <View style = { styles.buttonContainer }>
                        <Button onPress = { () => Actions.ViewM() } title = 'Poruke' style = { styles.button } />
                    </View>
                </View>
            </View> 
        );
    }
}

export default userinterfacecomponent;

AppRegistry.registerComponent('userinterfacecomponent', () => userinterfacecomponent);
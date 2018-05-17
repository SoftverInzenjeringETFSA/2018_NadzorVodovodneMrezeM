import React, {Component} from 'react';
import styles from './styles';
import { AppRegistry, View, Text, ListView } from 'react-native';

import PipeService from '../../services/pipe-service';

export default class userinterfacecomponent extends Component {
    data;
    pipeService = new PipeService();
    state = {
        isLoading: true
    };

    constructor() {
        super();
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

    static navigationOptions = {
        title: 'Podaci o vodovodnoj mreži'
    }
    getInitialState() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var data = Array.apply(null, {length: 20}).map(Number.call, Number);
        return {
            dataSource: ds.cloneWithRows(data),
        };
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
                <Text style = { styles.loaderText }>test</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('userinterfacecomponent', () => userinterfacecomponent);
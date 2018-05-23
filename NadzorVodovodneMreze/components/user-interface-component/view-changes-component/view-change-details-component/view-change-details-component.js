import React, {Component} from 'react';
import styles from './styles';
import {AppRegistry, View, Text, ActivityIndicator} from 'react-native';

import Moment from 'moment';

import ChangeService from '../../../../services/change-service';

export default class viewchangedetailscomponent extends Component {
    
    activeChange;
    changeService = new ChangeService();

    static navigationOptions = {
        title: 'Detalji izmjene'
    }

    componentWillMount() {
        this.setState({
            loading: true,
            data: [],
            error: null,
            refreshing: false,
        });
    }

    componentDidMount() {
        this.loadData().then(() => {
            console.log(this.activeChange);
            this.setState({
                loading:false
            });
        }).catch(err => console.log(err));
    }

    async loadData() {
        this.activeChange = await this.changeService.getChangeById(this.props.navigation.state.params);
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
            <View style={styles.container}>
                <Text>Autor izmjene: {this.activeChange.author}</Text>
                <Text>Naziv izmjene: {this.activeChange.change_name}</Text>
                <Text>Datum izmjene: {Moment(this.activeChange.change_date).format('D/M/Y HH:mm:ss')}</Text>
                <Text>Lokacija: {this.activeChange.location}</Text>
                <Text>Vodostaj: {this.activeChange.water_level}</Text>
                <Text>Broj kritičnih cijevi: {this.activeChange.critical_pipe_count}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('viewchangedetailscomponent', () => viewchangedetailscomponent);
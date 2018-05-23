import React, {Component} from 'react';
import styles from './styles';
import {AppRegistry, View, Text, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Moment from 'moment';

import ChangeService from '../../../services/change-service';
import viewchangedetailscomponent from './view-change-details-component/view-change-details-component';

export class viewchangescomponent extends Component {

    changeService = new ChangeService();
    data = [];

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
            error: null,
            refreshing: false,
        };
        this.onPress = this.onPress.bind(this);
    }

    componentDidMount() {
        this.loadData().then(() => {
            this.setState({
                loading: false,
                data: this.data
            });
        }).catch(err => console.log(err));
    }

    async loadData() {
        this.data = await this.changeService.getAllChanges();
    }
       
    onPress(id) {
        this.props.navigation.navigate('ChangeDetailsComponent', id);
    }

    static navigationOptions = {
        title: 'Izmjene na mreži'
    }

    renderSeparator = () => (
        <View
          style={{
            backgroundColor: 'grey',
            height: 0.5,
          }}
        />
      );

    render() {
        if (this.state.loading) {
            return ( 
                <View style={styles.container}> 
                    <ActivityIndicator size="large" />
                </View>
            );
        }
        console.log(this.state.data);
        return (
            <View style={styles.container}> 
                <FlatList  
                    data={this.state.data}
                    extraData={this.state}
                    renderItem={({item}) => {
                        console.log(item);
                        return (
                        <TouchableOpacity onPress={() => this.onPress(item._id)}
                            style={ styles.listItemContainer }> 
                            <Text style = {styles.listItemTitle} >
                                {item && item.change_name}
                            </Text> 
                            <Text style = {styles.listItemText} >
                                {item && item.author}
                            </Text> 
                            <Text style = {styles.listItemText} >
                                {item && Moment(item.change_date).format('D/M/Y HH:mm:ss')}
                            </Text> 
                        </TouchableOpacity>);
                    }}
                    keyExtractor={(item) => item._id}
                    style={styles.list}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        );
    
    }
}

export default Project = StackNavigator({
    ViewChangesComponent: { screen: viewchangescomponent },
    ChangeDetailsComponent: { screen: viewchangedetailscomponent }
},{
    headerMode: 'none'
});

AppRegistry.registerComponent('viewchangescomponent', () => viewchangescomponent);
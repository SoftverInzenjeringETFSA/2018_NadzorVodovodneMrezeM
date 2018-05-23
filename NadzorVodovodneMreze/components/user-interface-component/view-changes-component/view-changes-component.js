import React, {Component} from 'react';
import styles from './styles';
import {AppRegistry, View, Text, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {StackNavigator} from 'react-navigation';

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

    render() {
        if (this.state.loading) {
            return ( 
                <View style={styles.container}> 
                    <ActivityIndicator size="large" />
                </View>
            );
        }
        console.log(this.data);
        return (
            <View style={styles.container}> 
                <FlatList  
                    data={this.data}
                    extraData={this.state}
                    renderItem={(displayItem) => {
                        console.log(displayItem);
                        return (
                        <TouchableOpacity onPress={() => this.onPress(this.displayItem._id)}
                            style={ styles.listItemContainer }> 
                            <Text style = {styles.listItemText} >
                                {this.displayItem.change_name}
                            </Text> 
                        </TouchableOpacity>);
                    }}
                    keyExtractor={(item) => item._id}
                    style={styles.list}
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
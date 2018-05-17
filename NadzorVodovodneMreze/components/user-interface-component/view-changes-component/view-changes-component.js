import React, {Component} from 'react';
import styles from './styles';
import {AppRegistry, View, Text, FlatList, TouchableOpacity} from 'react-native';
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
            console.log(this.data);
            this.setState({
                loading: false
            });
        });
    }

    async loadData() {
        this.data = await this.changeService.getAllChanges();
    }    

    static navigationOptions = {
        title: 'Izmjene na mreži'
    }

    onPress(id) {
        this.props.navigation.navigate('ChangeDetailsComponent', id);
    }

    render() {
        if (this.state.loading) {
            return ( 
                <View style={styles.loaderContainer}> 
                    <Text style={styles.loaderText}>
                        Loading...
                    </Text>
                </View>
            );
        }
        return (
            <View style={styles.container}> 
                <FlatList 
                    data={this.data}
                    extraData={this.state}
                    renderItem={(item) => (
                        <TouchableOpacity onPress={() => this.onPress(item._id)}> 
                            <View style = { styles.listItemContainer } >
                                <Text style = {styles.listItemText} >{item.change_name}</Text> 
                            </View>
                        </TouchableOpacity>                                                
                    )}
                    keyExtractor={(item) => item._id}
                    containerStyle={{ borderBottomWidth: 0 }}
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
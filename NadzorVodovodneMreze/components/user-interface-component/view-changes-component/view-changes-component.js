import React, {Component} from 'react';
import styles from './styles';
import {AppRegistry, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';

import ChangeService from '../../../services/change-service';
import viewchangedetailscomponent from './view-change-details-component/view-change-details-component';

export class viewchangescomponent extends Component {

    data = [];
    changeService = new ChangeService();

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
            error: null,
            refreshing: false,
        };
    }

    componentDidMount() {
        this.loadData().then(() => {
            console.log(this.data);
            this.setState({
                loading: false
            });
        }).catch(err => console.log(err));
    }

    async loadData() {
        this.data = await this.changeService.getAllChanges();
    }    

    static navigationOptions = {
        title: 'Izmjene na mreži'
    }

    clickItem() {
        this.props.navigation.navigate('ChangeDetailsComponent');
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
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => this.clickItem()}> 
                            <View style = { styles.listItemContainer } >
                                <Text style = {styles.listItemText} >{item.change_name}</Text>
                            </View>
                        </TouchableOpacity>                                                
                    )}
                    keyExtractor={(item) => item._id}
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
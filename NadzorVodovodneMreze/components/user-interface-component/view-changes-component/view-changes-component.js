import React, {Component} from 'react';
import styles from './styles';
import {AppRegistry, View, Text, FlatList, TouchableOpacity, List} from 'react-native';
import {StackNavigator} from 'react-navigation';

import ChangeService from '../../../services/change-service';
import viewchangedetailscomponent from './view-change-details-component/view-change-details-component';

export class viewchangescomponent extends Component {

    data = [];
    changeService = new ChangeService();

    componentWillMount() {
        this.setState({
            loading: true,
            data: [],
            error: null,
            refreshing: false,
        });
        this.onPress = this.onPress.bind(this);
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
                    ItemSeparatorComponent={this.renderSeparator}
                    containerStyle={{ borderBottomWidth: 0 }}
                /> 
            </View>
        );
    }
}

renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
};

export default Project = StackNavigator({
    ViewChangesComponent: { screen: viewchangescomponent },
    ChangeDetailsComponent: { screen: viewchangedetailscomponent }
},{
    headerMode: 'none'
});

AppRegistry.registerComponent('viewchangescomponent', () => viewchangescomponent);

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import helpcomponent from './components/help-component/help-component';
import styles from './AppStyles';

class maincomponent extends Component {
	static navigationOptions = 	{
    		title: 'Stranica za prijavu',
 	};
	onClickHelp = () => {
    		this.props.navigation.navigate('Second');  
 	}
	render() {
		return(
		<View style = { styles.container }> 
			<Button onPress = { this.onClickHelp } title = 'Help' style = { styles.button } />
		</View>
		);
	}
}

export default Project = StackNavigator({
	First: { screen: maincomponent },
	Second: { screen: helpcomponent }
});
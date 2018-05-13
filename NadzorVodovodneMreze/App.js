
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import helpcomponent from './components/help-component/help-component';
import styles from './AppStyles';
import userinterfacecomponent from './components/user-interface-component/user-interface-component';

class maincomponent extends Component {
	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
	}
	static navigationOptions = 	{
		title: 'Stranica za prijavu',
	};

	onPress(txt) {
		this.props.navigation.navigate(txt);
	} 

	render() {
		return(
		<View style = { styles.container }> 
			<Button onPress = { () => this.onPress('UserInterface') } title = 'User Interface ' style = { styles.button } />
			<Button onPress = { () => this.onPress('Help') } title = 'Help' style = { styles.button } />
		</View>
		);
	}
}

export default Project = StackNavigator({
	Main: { screen: maincomponent },
	Help: { screen: helpcomponent },
	UserInterface: { screen: userinterfacecomponent }
});
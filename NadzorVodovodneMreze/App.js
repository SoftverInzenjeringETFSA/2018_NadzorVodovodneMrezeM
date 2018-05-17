
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import helpcomponent from './components/help-component/help-component';
import styles from './AppStyles';
import userinterfacecomponent from './components/user-interface-component/user-interface-component';
import guestinterfacecomponent from './components/guest-interface-component/guest-interface-component';

class maincomponent extends Component {
	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
	}
	static navigationOptions = 	{
		title: 'Nadzor vodovodne mreže'
	};

	onPress(txt) {
		this.props.navigation.navigate(txt);
	} 

	render() {
		return(
		<View style = { styles.container }>
			<View style = { styles.buttonsContainer }>
				<View style = { styles.buttonContainer }>
					<Button onPress = { () => this.onPress('UserInterface') } title = 'Prijava korisnika' style = { styles.button } />
				</View>
				<View style = { styles.buttonContainer }>
					<Button onPress = { () => this.onPress('GuestInterface') } title = 'Prijava gosta' style = { styles.button } />
				</View>
				<View style = { styles.buttonContainer }>
					<Button onPress = { () => this.onPress('Help') } title = 'Help' style = { styles.button } />
				</View> 
			</View>
		</View> 
		);
	}
}

export default Project = StackNavigator({
	Main: { screen: maincomponent },
	Help: { screen: helpcomponent },
	UserInterface: { screen: userinterfacecomponent },
	GuestInterface: { screen: guestinterfacecomponent }
});
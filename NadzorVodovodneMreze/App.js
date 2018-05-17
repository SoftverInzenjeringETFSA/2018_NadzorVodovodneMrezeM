
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
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
			<View style = { styles.meni }>
				<TouchableOpacity onPress = { () => this.onPress('UserInterface') }>
				<Image style={styles.menuImageStyle}  source={require('./resursi/slike/loginn.png')} />
				</TouchableOpacity>
				<TouchableOpacity onPress = { () => this.onPress('GuestInterface') }>
				<Image style={styles.menuImageStyle}  source={require('./resursi/slike/info.png')} />
				</TouchableOpacity>
				<TouchableOpacity onPress = { () => this.onPress('Help') }>
				<Image style={styles.menuImageStyle}  source={require('./resursi/slike/help.png')} />
				</TouchableOpacity> 
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
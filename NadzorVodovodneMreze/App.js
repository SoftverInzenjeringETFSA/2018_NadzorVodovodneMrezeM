
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';

import helpcomponent from './components/help-component/help-component';
import styles from './AppStyles';
import userinterfacecomponent from './components/user-interface-component/user-interface-component';
import insertchangescomponent from './components/user-interface-component/insert-changes-component/insert-changes-component';
import gamecomponent from './components/game-component/game-component';

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
			<View style = { styles.meni }>
				<TouchableOpacity onPress = { () => this.onPress('Game') }>
				<Image style={styles.menuImageStyle}  source={require('./resursi/slike/game.png')} />
				</TouchableOpacity>
				<TouchableOpacity onPress = { () => this.onPress('UserInterface') }>
				<Image style={styles.menuImageStyle}  source={require('./resursi/slike/loginn.png')} />
				</TouchableOpacity>
				<TouchableOpacity onPress = { () => this.onPress('InsertChanges') }>
				<Image style={styles.menuImageStyle}  source={require('./resursi/slike/message.png')} />
				</TouchableOpacity>
				<TouchableOpacity onPress = { () => this.onPress('Help') }>
				<Image style={styles.menuImageStyle}  source={require('./resursi/slike/help.png')} />
				</TouchableOpacity>
				<TouchableOpacity onPress = { () => this.onPress('Main') }>
				<Image style={styles.menuImageStyle}  source={require('./resursi/slike/out.png')} />
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
	InsertChanges: {screen: insertchangescomponent },
	Game: {screen : gamecomponent}
});
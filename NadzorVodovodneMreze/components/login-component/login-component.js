import React, {Component} from 'react';
import { AsyncStorage, Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './styles';

class login extends Component {

	constructor(){
		super();
		this.state = {
			username: null,
			password: null
		}
	}

	async onValueChange(item, selectedValue) {
		try {
			await AsyncStorage.setItem(item, selectedValue);
		} catch (error) {
			console.log('AsyncStorage error: ' + error.message);
		}
	}

	userGuest() {
		Actions.Guest();
	}

	userLogin() {
		if (this.state.username && this.state.password) {
			// TODO: localhost doesn't work. Get the IP address with ifconfig.
			fetch("http://192.168.1.7:3001/sessions/create", {
				method: "POST",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username: this.state.username,
					password: this.state.password,
				})
			})
			.then((response) => response.json())
			.then((responseData) => {
				this.onValueChange('id_token', responseData.id_token),
				Alert.alert(
					"Login Success!"
				),
				Actions.User();
			})
			.done();
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.form}>
					<TextInput
						editable={true}
						onChangeText={(username) => this.setState({username})}
						placeholder='Username'
						ref='username'
						returnKeyType='next'
						style={styles.inputText}
						value={this.state.username}
						/>
					<TextInput
						editable={true}
						onChangeText={(password) => this.setState({password})}
						placeholder='Password'
						ref='password'
						returnKeyType='next'
						secureTextEntry={true}
						style={styles.inputText}
						value={this.state.password}
						/>
					<TouchableOpacity
						style={styles.buttonWrapper}
						onPress={this.userLogin.bind(this)}
						>
						<Text style={styles.buttonText}>
							Log In
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.buttonWrapper}
						onPress={this.userGuest.bind(this)}
						>
						<Text style={styles.buttonText}>
							Log In as Guest
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default login;
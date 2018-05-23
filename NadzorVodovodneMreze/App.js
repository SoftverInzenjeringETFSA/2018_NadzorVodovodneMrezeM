
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import helpcomponent from './components/help-component/help-component';
import styles from './AppStyles';
import userinterfacecomponent from './components/user-interface-component/user-interface-component';
import guestinterfacecomponent from './components/guest-interface-component/guest-interface-component';
import t from 'tcomb-form-native';
import UserService from './services/user-service';

const Form = t.form.Form;

const InputData = t.struct({
  username: t.String,
  password: t.String
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    flex: 3,
    normal: {
      marginBottom: 10,
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600',
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600',
    },
  },
};

const options = {
  order: ['username', 'password'],
  fields: {
    username: {
      placeholder: '',
      label: 'Korisničko ime:',
      error: 'Korisničko ime ne postoji',
  },
  password: {
      placeholder: '',
      label: 'Šifra:',
      error: 'Unijeli ste pogrešnu šifru',
    },
  },
  stylesheet: formStyles,
};

class maincomponent extends Component {
	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
	}
	static navigationOptions = 	{
		title: 'Nadzor vodovodne mreže'
	};
	handleSubmit = () => {
    const value = this._form.getValue();
	}
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
          <Form ref={c => (this._form = c)} type={InputData} options={options} />
          <Button title="Sign in" onPress={this.handleSubmit} />
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
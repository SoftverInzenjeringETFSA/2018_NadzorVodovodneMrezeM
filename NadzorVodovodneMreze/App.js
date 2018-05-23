import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, TouchableOpacity, Image, ActivityIndicator, AsyncStorage } from 'react-native';
import helpcomponent from './components/help-component/help-component';
import gost from './components/help-component/guest';
import ulogovani from './components/help-component/ulogovani';
import styles from './AppStyles';
import login from './components/login-component/login-component'
import userinterfacecomponent from './components/user-interface-component/user-interface-component';
import guestinterfacecomponent from './components/guest-interface-component/guest-interface-component';
import t from 'tcomb-form-native';
import {Router, Scene} from 'react-native-router-flux';
import gamecomponent from './components/game-component/game-component';
import insertchangescomponent from './components/user-interface-component/insert-changes-component/insert-changes-component';
import viewchangescomponent from './components/user-interface-component/view-changes-component/view-changes-component';
import viewmessagescomponent from './components/user-interface-component/view-messages-component/view-messages-component';

const Form = t.form.Form;

const InputData = t.struct({
    username: t.String,
    password: t.String
  });

  const formStyles = {
    ...Form.stylesheet,
    formGroup: {
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
    this.state = {
      hasToken: false,
      isLoaded: false
    }
  }
  componentDidMount() {
    AsyncStorage.getItem('id_token').then((token) => {
      if (token !== null){
        this.setState({
          hasToken: true,
          isLoaded: true
        });
      } else{
        this.setState({
          hasToken: false,
          isLoaded: true
        });
      }
    });
  }
	render() {
    if (!this.state.isLoaded){
      return (
        <ActivityIndicator />
      )
    } else {
      return(
        <Router>
          <Scene key="root">
            <Scene
              component={login}
              hideNavBar={true}
              initial={true}
              key="Authentication"
              title="Authentication"
            />
            <Scene
              component={userinterfacecomponent}
              hideNavBar={true}
              key="User"
              title="User"
            />
            <Scene
              component={guestinterfacecomponent}
              hideNavBar={true}
              key="Guest"
              title="Guest"
            />
            <Scene
              component={helpcomponent}
              hideNavBar={true}
              key="Help"
              title="Help"
            />
            <Scene
              component={gamecomponent}
              hideNavBar={true}
              key="Game"
              title="Game"
            />
            <Scene
              component={insertchangescomponent}
              hideNavBar={true}
              key="InsertC"
              title="InsertC"
            />
            <Scene
              component={viewchangescomponent}
              hideNavBar={true}
              key="ViewC"
              title="ViewC"
            />
            <Scene
              component={viewmessagescomponent}
              hideNavBar={true}
              key="ViewM"
              title="ViewM"
            />
          <Scene
              component={gost}
              hideNavBar={true}
              key="HelpG"
              title="HelpG"
            />
          <Scene
          component={ulogovani}
          hideNavBar={true}
          key="HelpU"
          title="HelpU"
        />
      </Scene>
        </Router>

		  );
	  }
  }
}

export default maincomponent;
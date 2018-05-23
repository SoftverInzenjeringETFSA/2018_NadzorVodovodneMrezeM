import React, {Component} from 'react';
import styles from './styles';
import {AppRegistry, View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import t from 'tcomb-form-native';
import moment from 'moment';
import ChangeService from '../../../services/change-service';
import PushNotification from 'react-native-push-notification';

const Form = t.form.Form;
changeService = new ChangeService();

const Level = t.refinement(t.Number, function(n) {
    return n >= 0 && n<=1;
  });
  Level.getValidationErrorMessage = function() {
    return 'Loš vodostaj!';
  };

  const Pipes = t.refinement(t.Number, function(n) {
    return n >= 0;
  });

  Pipes.getValidationErrorMessage = function() {
    return 'Broj cijevi mora biti pozitivan broj!';
  };


const InputData = t.struct({
    user: t.String,
    DateChanged: t.Date,
    ChangeName: t.String,
    Location: t.String,
    WaterLevel: Level,
    CriticalPipes: Pipes
  });

  const formStyles = {
    ...Form.stylesheet,
    formGroup: {
      normal: {
        marginBottom: 5
      },
    },
    controlLabel: {
      normal: {
        color: 'blue',
        fontSize: 15,
        fontWeight: '600',
      },
      // the style applied when a validation error occours
      error: {
        color: 'red',
        fontSize: 15,
        fontWeight: '600',
      },
    },
};

  const options = {
    order: ['user', 'DateChanged', 'ChangeName', 'Location', 'WaterLevel', 'CriticalPipes'],
    fields: {
      user: {
        placeholder: '',
        label: 'Korisnik:',
        error: 'Korisničko ime nije odabrano',
      },
      DateChanged: {
        mode: 'date',
        config: {
            format: (date) => moment(date).format('DD/MM/YYYY'),
          },
        label: 'Datum izmjene:'
      },
      ChangeName: {
        label: 'Naziv izmjene:',
        error: 'Morate unijeti naziv promjene!'
      },
      Location: {
        label: 'Lokacija:',
        error: 'Morate unijeti lokaciju!'
      },
      WaterLevel: {
          label: 'Nivo vodostaja:'

      },
      CriticalPipes: {
        label: 'Broj kritičnih cijevi:'
      }
    },
    stylesheet: formStyles,
  };

export default class insertchangescomponent extends Component {
    static navigationOptions = {
        title: 'Unos promjena'
    }
    handleSubmit = () => {
        const value = this._form.getValue();
        if(value !== null){
          console.log('value: ', value);
          changeService.createChange(value.user, 
            value.ChangeName, 
            value.DateChanged, 
            value.Location, 
            value.WaterLevel, 
            value.CriticalPipes);
        }
        if (value.user == 'user') { //korisnik je ulogovan - to je jedini user
          PushNotification.localNotification({
            title: value.ChangeName,
            message: "Lokacija: " + value.Location + "\nNivo vodostaja: "+ 
            value.WaterLevel + "\nBroj kritičnih cijevi: " + value.CriticalPipes,
          });
        }
        else {
          PushNotification.localNotification({
            title: value.ChangeName,
            message: "...",
          });
        }
      };
    render() {
        return (
          <ScrollView contentContainerStyle={styles.container2}>
            <View style={styles.container}>
        <Form ref={c => (this._form = c)} type={InputData} options={options} />
        <Button title="Sign Up" onPress={this.handleSubmit} />
      </View>
      </ScrollView>
        );
    }
}

AppRegistry.registerComponent('insertchangescomponent', () => insertchangescomponent);
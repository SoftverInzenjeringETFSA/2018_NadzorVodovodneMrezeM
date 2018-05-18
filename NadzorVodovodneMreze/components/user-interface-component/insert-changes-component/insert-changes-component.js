import React, {Component} from 'react';
import styles from './styles';
import {AppRegistry, View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import t from 'tcomb-form-native';
import moment from 'moment';
import PushNotification from 'react-native-push-notification';

const Form = t.form.Form;
const Level = t.refinement(t.Number, function(n) {
    return n >= 0 && n<=1;
  });
  Level.getValidationErrorMessage = function() {
    return 'Bad water level';
  };

  const Pipes = t.refinement(t.Number, function(n) {
    return n >= 0;
  });
  Level.getValidationErrorMessage = function() {
    return 'Number of pipes must be positive number';
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
      },
      Location: {
        label: 'Lokacija:'
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
        console.log('value: ', value);
        if (value.user == 'user') { //korisnik nije ulogovan
          PushNotification.localNotification({
            title: value.ChangeName,
            message: "...",
          });
        }
        else {
          PushNotification.localNotification({
            title: value.ChangeName,
            message: "Lokacija: " + value.Location + "\nNivo vodostaja: "+ 
            value.WaterLevel + "\nBroj kritičnih cijevi: " + value.CriticalPipes,
          });
        }
      }
    componentDidMount () {
      PushNotification.configure ({
        onNotification: function(notification) {
          console.log( 'NOTIFICATION:', notification );
        },
      });
    }
    render() {
        return (
            <ScrollView>
              <View style={styles.container}>
                <Form ref={c => (this._form = c)} type={InputData} options={options} />
                <Button title="Dodaj izmjenu" onPress={this.handleSubmit} />
              </View>
           </ScrollView>
        );
    }
}

AppRegistry.registerComponent('insertchangescomponent', () => insertchangescomponent);
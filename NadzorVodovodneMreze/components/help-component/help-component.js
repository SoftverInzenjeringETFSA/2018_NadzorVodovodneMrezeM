import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {AppRegistry, Text, View, Button} from 'react-native';
import styles from './styles';

export default class helpcomponent extends Component {
    constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
	}
	static navigationOptions = {
		title: 'Pomoc',
     };
     onPress(stranica) {
         console.log(stranica);
		this.props.navigation.navigate(stranica);
	} 
	render() {
    	return(
			<View style = { styles.container }>
				<Text style = { styles.text }>
                    Aplikacija se može koristiti bez prijave ili uz prijavu koristeći korisničke podatke dodijeljene
                    od strane Javnog Komunalnog Preduzeća Vodovod i Kanalizacija.{"\n"}
                </Text>
                <View style={styles.container}>
                    <Button style={styles.button} title="Način korištenja aplikacije za goste" onPress={() => this.onPress('P2')}/>
                </View>
                <View style={styles.container}>
                    <Button style={styles.button} title="Način korištenja aplikacije za prijavljene korisnike" onPress={() => this.props.navigation.navigate('P2')}/>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Svi korisnici u mogućnosti su pristupiti igrici.
                    </Text>
                </View>
                <View style={styles.container}>
                    <Button style={styles.button} title="Način korištenja igrice" onPress={() => this.props.navigation.navigate('P2')}/>
                </View>
            </View>
    	);
 	}
}

export class gost extends React.Component {
    static navigationOptions = {
		title: 'Gost',
 	};
	render() {
    	return(
			<View style = { styles.container }>
				<Text style = { styles.text }>
                    Neki tekst{"\n"}
                </Text>
            </View>
    	);
 	}
}

const App = StackNavigator({
    P1: {screen: helpcomponent},
    P2: {screen: gost}
});

AppRegistry.registerComponent('helpcomponent', () => helpcomponent);
AppRegistry.registerComponent('gost', () => gost);
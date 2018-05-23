import React, {Component} from 'react';
import {AppRegistry, Text, View, Button, FlatList, ScrollView, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './styles';

export class helpcomponent extends Component {
    constructor(props) {
		super(props);
	}
	render() {
    	return(
			<ScrollView contentContainerStyle = { styles.container }>
				<Text style = { styles.text }>
                    Aplikaciji se može pristupiti bez prijave ili uz prijavu koristeći korisničke podatke dodijeljene
                    od strane Javnog Komunalnog Preduzeća Vodovod i Kanalizacija.{"\n"}
                </Text>
                <View style={styles.button}>
					<Button title="Način korištenja aplikacije za goste" onPress={() => Actions.HelpG()}/>
					<Text> {"\n"} </Text>
					<Button style={styles.button} title="Način korištenja aplikacije za prijavljene korisnike" onPress={() => Actions.HelpU()}/>
					<Text style={styles.text}>
						{"\n"}
						Svi korisnici u mogućnosti su pristupiti igrici.
					</Text>
                </View>
            </ScrollView>
    	);
 	}
}
export default helpcomponent;
AppRegistry.registerComponent('helpcomponent', () => helpcomponent);
AppRegistry.registerComponent('gost', () => gost);
AppRegistry.registerComponent('ulogovani', () => ulogovani);
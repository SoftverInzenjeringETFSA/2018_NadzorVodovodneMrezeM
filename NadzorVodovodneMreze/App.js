
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class PocetnaAktivnost extends Component {
	static navigationOptions = 	{
    		title: 'Stranica za prijavu',
 	};
	onClickHelp = () => {
    		this.props.navigation.navigate('Second');  
 	}
	render() {
    		return(
			<View style = { styles.container }>
				<Button onPress = { this.onClickHelp } title = 'Help' style = { styles.button } />
			</View>
    		);
	}
}

class HelpAktivnost extends Component {
	static navigationOptions = {
		title: 'Pomoc',
 	};
	render() {
    		return(
			<View style = { styles.container }>
				<Text style = { styles.TextStyle }>
					Aplikacija koja ce se razviti sluzi za nadzor vodovodne mreze od strane radnika Vodovoda i Kanalizacije.{"\n"}
{"\n"}
Na stranici za prijavu biti ce omoguceno korisnicima da se prijave ili pristupe sistemu bez prijave.{"\n"}
{"\n"}
Neprijavljeni korisnici nece biti u mogucnosti pristupiti svim stranicama, odnosno nece im biti omogucene sljedece funkcionalnosti aplikacije:{"\n"}
{"\n"}
- Prikaz svih informacija o izmjenama;{"\n"}
- Vrsenje izmjena na vodovodnoj mrezi;{"\n"}
- Pregled poruka korisnika;{"\n"}
- Prikaz detaljnih informacija o porukama korisnika.{"\n"}
{"\n"}
Svi korisnici biti ce u mogucnosti pristupiti sljedecim stranicama:{"\n"}
{"\n"}
- Pocetnoj stranici (na kojoj su prikazane informacije o vodovodnoj mrezi);{"\n"}
- Stranici s listom izvrsenih izmjena (s osnovnim informacijama o istim);{"\n"}
- Igrici (koja ukljucuje menu, pomoc, prikaz najboljih rezultata i sam ekran na kojem se igrica igra).
				</Text>
			</View>
    		);
 	}
}

export default Project = StackNavigator({
	First: { screen: PocetnaAktivnost },
	Second: { screen: HelpAktivnost }
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button : {
		borderWidth: 1,
		borderColor: 'black',
		color: 'black'
	},
	text : {
		fontSize: 14,
		textAlign: 'left'
	}
});
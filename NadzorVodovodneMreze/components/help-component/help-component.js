import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import styles from './styles';

export default class helpcomponent extends Component {
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

AppRegistry.registerComponent('helpcomponent', () => helpcomponent);
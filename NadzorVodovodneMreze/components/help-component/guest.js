import React, {Component} from 'react';
import {AppRegistry, Text, View, Button, FlatList, ScrollView, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './styles';

class gost extends React.Component {
	render() {
    	return(
			<ScrollView contentContainerStyle = { styles.container }>
				<View style={styles.zasebniView}>
					<Text style={styles.text}>
						Aplikaciju je moguće koristiti bez posjedovanja (i unošenja) korisničkih podataka.
						{"\n"}{"\n"}
						U ovom načinu rada aplikacija pruža ograničeni broj funkcionalnosti.
					</Text>
				</View>
				<View style={styles.header}>
					<Text style = { styles.textH }>
                	    Prikaz informacija o vodovodnoj mreži
                	</Text>
				</View>
				<View style={styles.zasebniView}>
					<Text style = { styles.text }>
                	    Pritiskom na dugme 
						<Text style={styles.textB}>
							{" "}Prijavi se kao gost{" "}
						</Text>
						 koje se nalazi na početnom ekranu pristupa se 
						novom početnom ekranu aplikacije za korisnike koji se ne žele prijaviti.
						{"\n"}{"\n"}
						Na ekranu se nalaze sljedeće informacije:
						{"\n"}{"\n"}
                		- Tabela s podacima vodovodne mreže, čije vrijednosti su onemogućene za pregled od strane gostiju;
						{"\n"}{"\n"}
						- Broj novih podataka vodovodne mreže koji su ažurirani od posljednje posjete.
					</Text>
				</View>
				<View style={styles.header}>
					<Text style = { styles.textH }>
					Primanje notifikacija o izvršenim izmjenama na vodovodnoj mreži
                	</Text>
				</View>
				<View style={styles.zasebniView}>
					<Text style = { styles.text }>
                	    Kada neki autorizovani korisnik izvrši izmjenu na vodovodnoj mreži, korisnik prijavljen kao 
						gost primiti će push notifikaciju da se izmjena desila, no neće biti u mogućnosti vidjeti 
						tekst iste.
					</Text>
				</View>
				<View style={styles.header}>
					<Text style = { styles.textH }>
						Ostale mogućnosti
                	</Text>
				</View>
				<View style={styles.zasebniView}>
					<Text style = { styles.text }>
                	    Korisniku je u svakom trenutku omogućen pristup igrici, pritiskom na sljedeće dugme:
					</Text>
					<View style={styles.images}>
						<Image source={{uri: 'https://i.imgur.com/hoK4As7.png'}} style={styles.image}/>
					</View>
					<Text style = { styles.text }>
						{"\n"}
						Ukoliko korisnik želi pregledati listu izvršenih izmjena, u svakom trenutku to može učiniti 
						pritiskom na sljedeće dugme:
                	</Text>
					<View style={styles.images}>
						<Image source={{uri: 'https://i.imgur.com/w0zi5Jl.png'}} style={styles.image}/>
					</View>
					<Text style = { styles.text }>
						{"\n"}
						Korisniku je omogućen pregled samo naziva izmjena, no ne i njihovog sadržaja.
                	</Text>
					<Text style = { styles.text }>
						{"\n"}
						Ukoliko se korisnik odluči ulogovati, u svakom trenutku može se vratiti na početni ekran
						na kojem će mu biti omogućeno unošenje korisničkih podataka i logovanje, pritiskom na
						sljedeće dugme:
                	</Text>
					<View style={styles.images}>
						<Image source={{uri: 'https://i.imgur.com/rd25qfM.png'}} style={styles.image}/>
					</View>
				</View>
            </ScrollView>
    	);
 	}
}
export default gost;
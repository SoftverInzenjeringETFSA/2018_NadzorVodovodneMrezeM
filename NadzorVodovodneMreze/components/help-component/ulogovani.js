import React, {Component} from 'react';
import {AppRegistry, Text, View, Button, FlatList, ScrollView, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './styles';

class ulogovani extends React.Component {
	render() {
    	return(
			<ScrollView contentContainerStyle = { styles.container }>
				<View style={styles.zasebniView}>
					<Text style={styles.text}>
						Kako bi se korisnik mogao prijaviti, potrebno je da posjeduje korisničke podatke 
						dodijeljene od strane Javnog Komunalnog Preduzeća Vodovod i Kanalizacija.
						{"\n"}{"\n"}
						U ovom načinu rada aplikacije omogućene su i dodatne funkcionalnosti.
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
						{" "}Prijavi se{" "}
					</Text>
						koje se nalazi na početnom ekranu pristupa se 
						novom početnom ekranu aplikacije za prijavljene korisnike.
						{"\n"}{"\n"}
						Na ekranu se nalaze sljedeće informacije:
						{"\n"}{"\n"}
                		- Tabela s podacima vodovodne mreže, čije vrijednosti su omogućene za pregled od 
						strane prijavljenih korisnika;
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
						Kada neki autorizovani korisnik izvrši izmjenu na vodovodnoj mreži, prijavljeni korisnik 
						primiti će push notifikaciju da se izmjena desila, uključujući i sve prateće podatke 
						o istoj (izvršenu izmjenu i poruku korisnika koji je izvršio izmjenu).
					</Text>
				</View>
				<View style={styles.header}>
					<Text style = { styles.textH }>
					Vršenje izmjena na vodovodnoj mreži
                	</Text>
				</View>
				<View style={styles.zasebniView}>
					<Text style = { styles.text }>
                	    Kako bi se izvršila izmjena na vodovodnoj mreži, potrebno je pritisnuti dugme 
					<Text style={styles.textB}>
						{" "}Izmijeni podatke{" "}
					</Text>
						na početnoj stranici za prijavljene korisnike, čime će korisnik biti preusmjeren na novi ekran, 
						gdje će se nalaziti polja za unos svih relevantnih podataka za konkretnu izmjenu.
						{"\n"}{"\n"}
						Nakon unošenja svih podataka, izmjena će se izvršiti pritiskom na dugme 
					<Text style={styles.textB}>
						{" "}Spasi izmjene
					</Text>
						.
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
						Pristup ekranu sa svim porukama od strane autorizovanih korisnika moguć je 
						pritiskom na sljedeće dugme:
                	</Text>
					<View style={styles.images}>
						<Image source={{uri: 'https://i.imgur.com/v4AwL5B.png'}} style={styles.image}/>
					</View>
					<Text style = { styles.text }>
						{"\n"}
						Pritiskom na element liste, odnosno konkretnu poruku, korisnik će moći pristupiti 
						novom ekranu sa kompletnim sadržajem poruke i informacijama o pošiljaocu.
                	</Text>
					<Text style = { styles.text }>
						{"\n"}
						Ukoliko se korisnik odluči izlogovati, u svakom trenutku to može učiniti 
						pritiskom na sljedeće dugme:
                	</Text>
					<View style={styles.images}>
						<Image source={{uri: 'https://i.imgur.com/rGvwFml.png'}} style={styles.image}/>
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
						Pritiskom na element liste, odnosno konkretnu izmjenu, korisnik će moći pristupiti 
						novom ekranu sa svim relevantnim informacijama o odabranoj izmjeni.
                	</Text>
				</View>
            </ScrollView>
    	);
 	}
}
export default ulogovani;
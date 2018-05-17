import React, {Component} from 'react';
import {AppRegistry, View, Text, Image,  TouchableOpacity} from 'react-native';
import { StackNavigator, } from 'react-navigation';

import ChangeService from '../../services/change-service.js';
import styles from './styles.js';
import gamecomponent from '../../components/game-component/game-component';
//import maincomponent from '../../App';
import helpcomponent from '../../components/help-component/help-component';

export default class guestinterfacecomponent extends Component {
    brojPoruka = 0;
    changeService = new ChangeService();
	constructor(props) {
		super(props);
        this.onPress = this.onPress.bind(this);
        
	}
	static navigationOptions = 	{
		title: 'Gost',
    };
    async loadData() {
        let data = await this.changeService.getAllChanges();
        console.log(data);
        brojPoruka = data.length;
    }

	onPress(txt) {
		this.props.navigation.navigate(txt);
	} 

	render() {
		return(
		 
		<View style = { styles.container }>
			<View style = { styles.meni }>
				<TouchableOpacity onPress = { () => this.onPress('Game') }>
				<Image style={styles.menuImageStyle}  source={require('../../resursi/slike/game.png')} />
				</TouchableOpacity>
				<TouchableOpacity onPress = { () => this.onPress('Help') }>
				<Image style={styles.menuImageStyle}  source={require('../../resursi/slike/help.png')} />
				</TouchableOpacity>
			</View>
            <View style = {styles.brInf}>
                <Text style = { styles.textStyle }>
                    Broj novih informacija:
                    {this.brojPoruka}
                </Text> 
            </View>

            <View style = {styles.textOpis}>
                <Text style = { styles.textStyle }>
                    Pregled podataka vodovodne mreže
                </Text>
            </View>
		</View>
		);
	}
}

const  Project = StackNavigator({
	//Main: { screen: maincomponent },
	Help: { screen: helpcomponent },
	Game: { screen : gamecomponent}
});

AppRegistry.registerComponent('guestinterfacecomponent', () => guestinterfacecomponent);
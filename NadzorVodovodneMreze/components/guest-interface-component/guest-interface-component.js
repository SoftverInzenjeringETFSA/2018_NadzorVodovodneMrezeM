import React, {Component} from 'react';
import {AppRegistry, View, Text, Image,  TouchableOpacity} from 'react-native';
import { StackNavigator, } from 'react-navigation';
import ChangeService from '../../services/change-service.js';
import styles from './styles.js';
import gamecomponent from '../../components/game-component/game-component';
import helpcomponent from '../../components/help-component/help-component';
import MyMap from '../map-component/map-component';
import { Polyline, Circle } from 'react-native-maps';
import PipeApi from '../../services/PipeApi';


export default class guestinterfacecomponent extends Component {
    brojPoruka = 0;
	changeService = new ChangeService();
	pipes = [];
	
	
	pipeStyleOptions = {
		strokeColor: '#00eeff',
		strokeWeight: 6,
		geodesic: true
	};
	brokenPipeStyleOptions = {
		strokeColor: '#ff0000',
		strokeWeight: 6,
		geodesic: true
	}
	workInProgressPipeStyleOptions = {
		strokeColor: '#ffff00',
		strokeWeight: 6,
		geodesic: true
	}
	
	constructor(props) { 
		super(props);
		this.onPress = this.onPress.bind(this);
		this.loadPipes = this.loadPipes.bind(this);
		
		

	this.loadPipes() .then((data) => {
		console.log({"pipes":data});

		for ( let pipe of data ) {
			var pipeOptions = null;
			if(pipe.hasOwnProperty("status") && pipe.status==="critical")
				pipeOptions=this.brokenPipeStyleOptions;
			else if(pipe.hasOwnProperty("status") && pipe.status==="workInProgress")
				pipeOptions=this.workInProgressPipeStyleOptions;
			else
			pipeOptions=this.pipeStyleOptions;

		this.pipes.push(
			<Polyline
		coordinates={[
			{ latitude: pipe.start_lat, longitude: pipe.start_lng },
			{ latitude: pipe.end_lat, longitude: pipe.end_lng }
		]}
		strokeColor= {pipeOptions.strokeColor} // fallback for when `strokeColors` is not supported by the map-provider
		
		strokeWidth={pipeOptions.strokeWeight}
	/>);
	}
	  }).catch((error)=>{
		 console.log({"pipes":"Api call error"});
		 alert(error.message);
	  });
	 
	}
	componentDidMount() {
		this.loadData().then(
			result => console.log(result)
		).catch(err => console.log(err));
		
	}
	static navigationOptions = 	{
		title: 'Gost',
    };
    async loadData() {
        let data = await this.changeService.getAllChanges();
        return data;
    }
	async loadPipes() {
        let data = await PipeApi.GetPipes();
        return data;
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
			<View style = {styles.mapStyle}>
			<MyMap pipes={this.pipes} />
				<Text style = { styles.textStyle }>
                    RADI VISE
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
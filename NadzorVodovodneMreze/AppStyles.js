import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center', 
	},
	button : {
		flex: 1,
		borderWidth: 1,
		borderColor: 'black',
		color: 'black',
		margin: 15
	},
	buttonContainer: {
		flex:1,
		margin: 5
	},
	buttonsContainer: {
		flex: 0.3,
		marginTop: 40
	},
	text : {
		fontSize: 14,
		textAlign: 'left'
	}
});

export default styles;
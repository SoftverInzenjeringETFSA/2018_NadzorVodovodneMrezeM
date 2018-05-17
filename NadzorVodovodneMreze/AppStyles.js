import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	meni: {
		backgroundColor: '#e4e4e4',
		flexDirection: 'row',
		alignItems: 'flex-start',
		height : 40,
		alignSelf: 'flex-end'
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
	},
	menuImageStyle : {
		height : 40,
		width : 40
	}
});

export default styles;
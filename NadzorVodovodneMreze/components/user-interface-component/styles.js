import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center', 
		margin:15,
		borderWidth: 0,
		padding: 5
    },
    loaderContainer: {
        marginTop: 70,
        marginLeft: 30,
        flex: 0.5
    },
    loaderText: {
        fontSize: 20
    },
    button : {
		flex: 1
	},
	buttonsContainer: {
		flex: 0.3,
		marginTop: 40
	},
	buttonContainer: {
		flex:1,
		margin: 5
	}
});

export default styles;
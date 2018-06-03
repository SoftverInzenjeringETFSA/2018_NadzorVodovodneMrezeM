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
	menuImageStyle : {
		height : 40,
		width : 40
    },
	textOpis : {
        margin : 20,
        alignSelf: 'flex-start'
	},
	brInf : {
		margin : 20,
        alignSelf: 'flex-start'
	},
    textStyle : {
		fontSize: 18,
		textAlign: 'left',
		margin : 5
	},
	mapStyle : {
		height : 340,
		width : 340
    }
});

export default styles;
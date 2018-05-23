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
    listItemText: {
        flex: 1,
        fontSize: 15
    },
    listItemContainer: {
        flex: 1,
        height: '30%',
        backgroundColor: 'blue'
    },
    list: {
        width: '100%',
        backgroundColor: 'red'
    }
});

export default styles;
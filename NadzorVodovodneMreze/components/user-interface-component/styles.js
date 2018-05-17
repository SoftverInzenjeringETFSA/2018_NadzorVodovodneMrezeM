import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: 'red',
        margin: 3,
        width: 100
    },
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
    }
});

export default styles;
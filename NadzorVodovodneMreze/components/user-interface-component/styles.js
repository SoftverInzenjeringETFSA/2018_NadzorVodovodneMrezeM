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
    }
});

export default styles;
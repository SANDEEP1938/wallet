import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainCard: {
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 10,
        alignSelf: 'center',
    },
    horizontalBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headingText: {
        padding: 10,
        color: '#0f0f0f'
    },
    underlinedText: {
        textDecorationLine: 'underline',
        padding: 10, color: '#0f0f0f'
    },
    button: { padding: 10 },
    monthHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    monthText: {
        textDecorationLine:'underline',
        padding: 20,
        color: '#0f0f0f'
    },
    amtText:{ 
        position: 'absolute', 
        alignItems: 'center', 
        marginTop: '45%', 
        paddingHorizontal: 15 
},
totalSpending:{ 
    position: 'absolute', 
    alignSelf: 'center', 
    alignItems: 'center', 
    marginTop: '20%' 
}
});
export { styles }
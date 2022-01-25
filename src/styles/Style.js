import { StyleSheet, Dimensions} from 'react-native'


const rows = 6
const cols = 4
const marginHorizontal = 0.8
const marginVertical = 0.8
const width = Dimensions.get('window').width / cols - (marginHorizontal * (cols + 1))
const uiHeight = Dimensions.get('window').height/10
const height = (Dimensions.get('window').height - uiHeight) / rows - (marginVertical * (rows + 1))


const styles = StyleSheet.create({ 
    container: {
        backgroundColor: '#fffcf2',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    ui: {
        flexDirection: 'row',
        height: uiHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#403d39',
        borderBottomWidth: 5,
        borderColor: '#fffcf2'
    },
    uiScore: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    uiTime: {
        flexDirection: 'column',
        padding: 10
    },
    text: {
        color: 'white',
        fontSize: 15
    },
    textScore: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    textEndGame: {
        paddingVertical: 20,
        //color: 'white',
        fontSize: 25
    },
    textResult: {
        fontSize: 40
    },
    textButton: {
        color: 'white',
        padding: 30,
        fontSize: 20
    },
    resultEndGame: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonPlayAgain: {
        borderColor: '#d62828',
        borderRadius: 10,
        backgroundColor: '#d62828'
    },
    blobVisible: {
        borderRadius: 5,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d62828',
    },
    blobNotVisible: {
        borderRadius: 5,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fffcf2' 
    }

})

export default styles
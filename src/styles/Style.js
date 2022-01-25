import { StyleSheet, Dimensions} from 'react-native'


const rows = 6
const cols = 4
const marginHorizontal = 0.8
const marginVertical = 1.2
const width = Dimensions.get('window').width / cols - (marginHorizontal * (cols + 1))
const uiHeight = Dimensions.get('window').height/12
const height = (Dimensions.get('window').height - uiHeight) / rows - (marginHorizontal * (rows + 1))


const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    ui: {
        height: uiHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    blobVisible: {
        borderRadius: 5,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gold',
    },
    blobNotVisible: {
        borderRadius: 5,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    }

})

export default styles
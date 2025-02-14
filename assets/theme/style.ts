import {StyleSheet, Dimensions} from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    containerGrid: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    image: {
        justifyContent: 'center',
    },
    grille: {
        flexDirection: 'row',
    },
    case: {
        width: (width <= 650 && height <= 800) ? 60 : (width >= 800 && height >= 650) ? 90 : 40,
        height: (width <= 650 && height <= 800) ? 60 : (width >= 800 && height >= 650) ? 90 : 40,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedCase: {
        borderWidth: 2,
        borderColor: 'white',
    },
    imageGrid: {
        width: '100%',
        height: '100%',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        marginHorizontal: 5,
        marginVertical: 5,
        width: 150,
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    container: {
        marginBottom: 15,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5,
    },
    containerHome: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    contained: {
        marginVertical: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
    },
    modalButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    titleContainer: {
        alignItems: 'center',
    },
    headerTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
});

export default styles;

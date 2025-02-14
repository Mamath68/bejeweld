import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    containerGrid: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'black'
    },
    grille: {
        flexDirection: 'row',
    },
    case: {
        width: 40,
        height: 40,
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
        marginVertical: 30,
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        paddingVertical: 10,
        backgroundColor: 'black',
        width: '100%',
        marginBottom: 5,
        color: 'white',
        textAlign: 'center',
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
});

export default styles;

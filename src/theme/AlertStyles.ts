import {StyleSheet} from "react-native";

export const AlertStyles = StyleSheet.create({

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
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        marginHorizontal: 5,
        marginVertical: 5,
        width: 150,
        borderRadius: 5,
        alignItems: 'center',
    },
});

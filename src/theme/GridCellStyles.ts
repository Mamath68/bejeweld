import {Dimensions, StyleSheet} from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const GridCellStyles = StyleSheet.create({
    case: {
        width: (width <= 650 && height <= 800) ? 40 : (width >= 800 && height >= 650) ? 90 : 40,
        height: (width <= 650 && height <= 800) ? 60 : (width >= 800 && height >= 650) ? 90 : 40,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedCase: {
        borderWidth: 2,
        borderColor: 'white',
    },
    image: {
        width: '100%',
        height: '100%',
    }
});

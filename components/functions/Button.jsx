import {Text, TouchableOpacity, View} from 'react-native';
import {BtnStyles} from '../../theme';

export const Button = ({name, onPress}) => (
    <View>
        <TouchableOpacity style={BtnStyles.gameBtn} onPress={onPress}>
            <Text style={BtnStyles.btnTxt}>{name}</Text>
        </TouchableOpacity>
    </View>
);

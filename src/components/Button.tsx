import { FC } from 'react';
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { ButtonStyles as styles } from "@/themes";

interface BoutonProps {
    onPress: () => void;
    title: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export const Bouton: FC<BoutonProps> = ({ onPress, title, style, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};
import {FC} from 'react';
import {KeyboardTypeOptions, TextInput, TextStyle, View, ViewStyle} from 'react-native';
import {InputStyles as styles} from "@/theme";

interface InputProps {
    placeholder: string;
    title: string;
    value: string;
    onChangeText: (value: string) => void;
    style?: ViewStyle;
    inputStyle?: TextStyle;
    textStyle?: TextStyle;
    secureTextEntry?: boolean;
    keyboardType?: KeyboardTypeOptions;
}

export const Input: FC<InputProps> = ({
                                          placeholder,
                                          value,
                                          onChangeText,
                                          style,
                                          inputStyle,
                                          secureTextEntry,
                                          keyboardType
                                      }) => {
    return (
        <View style={[styles.container, style]}>
            <TextInput
                style={[styles.input, inputStyle]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
            />
        </View>
    );
};

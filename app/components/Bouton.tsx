import { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface BoutonProps {
    onPress: () => void;
    title: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export default class Bouton extends Component<BoutonProps> {
    constructor(props: BoutonProps) {
        super(props);
    }

    render() {
        const { onPress, title, style, textStyle } = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
                <Text style={[styles.text, textStyle]}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
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
});

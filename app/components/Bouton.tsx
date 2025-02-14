import {Component} from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';
import styles from "@/assets/theme/style";

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
        const {onPress, title, style, textStyle} = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
                <Text style={[styles.text, textStyle]}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

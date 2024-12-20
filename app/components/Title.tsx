import React, {Component} from 'react';
import {Text, StyleSheet, View, TextStyle, ViewStyle} from 'react-native';

interface TitleProps {
    title: string;
    textStyle?: TextStyle;
    style?: ViewStyle;
}

export default class Title extends Component<TitleProps> {
    constructor(props: TitleProps) {
        super(props);
    }

    render() {
        const {title, textStyle, style} = this.props;
        return (
            <View style={[styles.header, style]}>
                <Text style={[styles.title, textStyle]}>{title}</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

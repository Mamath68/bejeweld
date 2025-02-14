import React, {Component} from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import styles from "@/assets/theme/style";

interface ModalProps {
    visible: boolean;
    title: string;
    message: string;
    onClose: () => void;
}

export default class Alert extends Component<ModalProps> {
    constructor(props: ModalProps) {
        super(props);
    }

    render() {
        const {visible, title, message, onClose} = this.props;
        return (
            <Modal
                transparent={true}
                animationType="slide"
                visible={visible}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.message}>{message}</Text>
                        <TouchableOpacity onPress={onClose} style={styles.button}>
                            <Text style={styles.buttonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}

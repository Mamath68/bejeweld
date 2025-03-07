import {FC} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {AlertStyles as styles} from "@/theme";

interface ModalProps {
    visible: boolean;
    title: string;
    message: string;
    onClose: () => void;
}

export const Alert: FC<ModalProps> = ({visible, title, message, onClose}) => {
    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>
                    <TouchableOpacity onPress={onClose} style={styles.button}>
                        <Text style={styles.buttonText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

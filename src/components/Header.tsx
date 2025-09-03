import { Text, View } from 'react-native';
import { HeaderStyles as styles } from "@/themes";

export const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MAGIWELD</Text>
            <Text style={styles.title}>THE CRUSHERING</Text>
        </View>
    );
};
import {Text, View} from 'react-native';
import {HeaderTitleStyles as styles} from "@/theme";

export const HeaderTitle = () => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.headerTitle}>MAGIWELD</Text>
            <Text style={styles.headerTitle}>THE CRUSHERING</Text>
        </View>
    );
};

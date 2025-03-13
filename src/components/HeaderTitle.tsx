import {Text, View} from 'react-native';
import {HeaderTitleStyles as styles} from "@/theme";

export const HeaderTitle = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MAGIWELD</Text>
            <Text style={styles.title}>THE CRUSHERING</Text>
        </View>
    );
};

import React from 'react';
import {Text, View} from 'react-native';
import styles from "@/assets/theme/style";

const HeaderTitle = () => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.headerTitle}>MAGIWELD</Text>
            <Text style={styles.headerTitle}>THE CRUSHERING</Text>
        </View>
    );
};

export default HeaderTitle;

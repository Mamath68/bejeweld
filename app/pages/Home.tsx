import {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Alert, Bouton, Grid} from "@/components";
import {CommonStyles as styles} from "@/theme";

const Bejeweld = () => {
    const [alertVisible1, setAlertVisible1] = useState(false);
    const [alertVisible2, setAlertVisible2] = useState(false);

    const showAlert1 = () => setAlertVisible1(true);
    const showAlert2 = () => setAlertVisible2(true);

    const closeAlert1 = () => setAlertVisible1(false);
    const closeAlert2 = () => setAlertVisible2(false);

    return (
        <ScrollView contentContainerStyle={styles.containerHome}>
            <View style={styles.contained}>
                <Bouton
                    onPress={showAlert1}
                    title="New Game"
                    style={{backgroundColor: 'grey'}}
                />
                <Bouton
                    onPress={showAlert2}
                    title="Highest Score"
                    style={{backgroundColor: 'grey'}}
                />
            </View>
            <View style={{marginTop: 25}}>
                <Grid/>
            </View>
            <Alert
                visible={alertVisible1}
                title="Nouveau Jeu"
                message="Commençons un nouveau jeu"
                onClose={closeAlert1}
            />
            <Alert
                visible={alertVisible2}
                title="Meilleurs Scores"
                message="Voici les meilleurs scores"
                onClose={closeAlert2}
            />
        </ScrollView>
    );
};

export default Bejeweld;

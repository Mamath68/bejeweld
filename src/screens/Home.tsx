import {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Alert, Bouton, Grid} from "@/components";
import {CommonStyles as styles} from "@/theme";

const Bejeweld = () => {
    const [newGame, setNewGame] = useState(false);
    const [bestScore, setBestScore] = useState(false);

    const showNewGame = () => setNewGame(true);
    const showBestScore = () => setBestScore(true);

    const closeNewGame = () => setNewGame(false);
    const closeBestScore = () => setBestScore(false);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.gameContainer}>
                <Bouton
                    onPress={showNewGame}
                    title="New Game"
                    style={{backgroundColor: 'grey'}}
                />
                <Bouton
                    onPress={showBestScore}
                    title="Highest Score"
                    style={{backgroundColor: 'grey'}}
                />
            </View>
            <View style={{marginVertical: 20}}>
                <Grid/>
            </View>
            <Alert
                visible={newGame}
                title="Nouveau Jeu"
                message="Commençons un nouveau jeu"
                onClose={closeNewGame}
            />
            <Alert
                visible={bestScore}
                title="Meilleurs Scores"
                message="Voici les meilleurs scores"
                onClose={closeBestScore}
            />
        </ScrollView>
    );
};

export default Bejeweld;

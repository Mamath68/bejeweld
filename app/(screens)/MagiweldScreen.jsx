import {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {Button, ProgressBar} from '../../components/functions';
import {Grid, Timer} from '../../components/game';
import {MagiweldScreenStyles} from '../../theme';

export default function MagiweldScreen({navigation}) {
    const [gameKey, setGameKey] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [score, setScore] = useState(0);

    const handleRoundEnd = (round, gameOver) => {
        if (gameOver) {
            setIsPlaying(false);
        }
    };

    const updateScore = (points) => {
        setScore(prevScore => prevScore + points);
    };

    const startNewGame = () => {
        setGameKey(prevKey => prevKey + 1);
        setIsPlaying(true);
        setScore(0);
    };

    return (
        <View style={MagiweldScreenStyles.container}>
            <View style={MagiweldScreenStyles.centerItems}>
                <Image
                    style={MagiweldScreenStyles.headerImg}
                    source={require('../../assets/img/kyler.png')}
                />
                <View style={MagiweldScreenStyles.btnContainer}>
                    <Button name="Title Screen" onPress={() => navigation.goBack()}/>
                    <Button name="New Game" onPress={startNewGame}/>
                </View>
            </View>

            <View>
                <Text style={MagiweldScreenStyles.txt}>Score: {score}</Text>
                <Timer key={gameKey} onRoundEnd={handleRoundEnd}/>
                <View>
                    {isPlaying ? (
                        <Grid key={gameKey} onScoreUpdate={updateScore}/>
                    ) : (
                        <Button name="High Scores"/>
                    )}
                </View>
            </View>

            <ProgressBar/>
        </View>
    );
};

import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {TimerStyles} from "../../theme";

export const Timer = ({onRoundEnd}) => {
    const initialRoundTime = 90;
    const [round, setRound] = useState(1);
    const [timeLeft, setTimeLeft] = useState(initialRoundTime);
    const [currentRoundTime, setCurrentRoundTime] = useState(initialRoundTime);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        if (timeLeft <= 0) {
            if (currentRoundTime === 10) {
                setGameOver(true);
                onRoundEnd && onRoundEnd(round, true);
                return;
            }
            onRoundEnd && onRoundEnd(round, false);
            const nextTime = Math.max(Math.floor(currentRoundTime * 0.8), 10);
            setRound(prev => prev + 1);
            setCurrentRoundTime(nextTime);
            setTimeLeft(nextTime);
        } else {
            const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [timeLeft]);

    return (
        <View style={TimerStyles.container}>
            {gameOver ? (
                <Text style={TimerStyles.txt}>Game Over!</Text>
            ) : (
                <View style={TimerStyles.row}>
                    <Text style={TimerStyles.txt}>Round: {round}</Text>
                    <Text style={TimerStyles.txt}>Timer: {timeLeft}</Text>
                </View>
            )}
        </View>
    );
};

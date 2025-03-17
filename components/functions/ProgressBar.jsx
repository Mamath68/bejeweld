import {Text, View} from 'react-native';
import {ProgressBarStyles} from '../../theme';

export const ProgressBar = () => {
    return (
        <View style={ProgressBarStyles.container}>
            <Text style={ProgressBarStyles.txt}>Dominance</Text>
            <View style={ProgressBarStyles.colorContainer}>
                <View style={ProgressBarStyles.colorVilain}>
                    <Text style={ProgressBarStyles.vilainTxt}>Vilain</Text>
                </View>
                <View style={ProgressBarStyles.center}/>
                <View style={ProgressBarStyles.colorHero}>
                    <Text style={ProgressBarStyles.heroTxt}>Hero</Text>
                </View>
            </View>
        </View>
    );
};

import {Image, View} from 'react-native';
import {HomeScreenStyles} from '../../theme';
import {GameBtn} from "../../components/functions";
import {useRouter} from "expo-router";

export default function HomeScreen() {
    const router = useRouter();
    return (
        <View style={HomeScreenStyles.container}>
            <Image
                style={HomeScreenStyles.titleImg}
                source={require('../../assets/img/kyler.png')}
            />
            <GameBtn
                name="Start Game"
                onPress={() => router.push("MagiweldScreen")}
            />
        </View>
    )
}

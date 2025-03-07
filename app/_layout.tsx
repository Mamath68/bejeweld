import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bejeweld from "@/pages/Home";
import {HeaderTitle} from "@/components";


const Stack = createNativeStackNavigator();

export default function RootLayout() {
    return (
        <GestureHandlerRootView>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: 'red',

                },
                headerTintColor: '#fff',
                headerTitle: () => <HeaderTitle/>, // Composant Personnalisé pour le titre.
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 30
                },
                headerTitleAlign: "center"
            }} initialRouteName="Home">
                <Stack.Screen name="Home" component={Bejeweld}/>
            </Stack.Navigator>
        </GestureHandlerRootView>
    );
}

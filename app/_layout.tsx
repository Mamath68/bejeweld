import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bejeweld from "./pages/Home";


const Stack = createNativeStackNavigator();

export default function RootLayout() {
    return (
        <GestureHandlerRootView>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }} initialRouteName="Home">
                <Stack.Screen name="Home" component={Bejeweld}/>
            </Stack.Navigator>
        </GestureHandlerRootView>
    );
}

import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bejeweld from "./pages/Home";


const Stack = createNativeStackNavigator();

export default function RootLayout() {
    return (
        <GestureHandlerRootView>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20
                },
                headerTitleAlign: "center"
            }} initialRouteName="Home">
                <Stack.Screen name="Home" component={Bejeweld} options={{
                    title: "BEJEWELD"
                }}/>
            </Stack.Navigator>
        </GestureHandlerRootView>
    );
}

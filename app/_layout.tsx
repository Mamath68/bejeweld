import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bejeweld from "./pages/Home";
import HeaderTitle from "@/app/components/HeaderTitle";


const Stack = createNativeStackNavigator();

export default function RootLayout() {
    return (
        <GestureHandlerRootView>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: 'black',

                },
                headerTintColor: '#fff',
                headerTitle: () => <HeaderTitle/>, // Use the custom header title
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

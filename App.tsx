import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bejeweld from "@/src/screens/Bejeweld";
import { Header } from "@/src/components/Header";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitle: () => <Header />, // Composant pour customiser le HeaderTitle.
        }} initialRouteName="Home">
          <Stack.Screen name="Home" component={Bejeweld} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
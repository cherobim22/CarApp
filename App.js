import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import CarListScreen from './src/Screens/CarList';
import WelcomeScreen from './src/Screens/Welcome';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider>  
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CarList">
                <Stack.Screen name="CarList" component={CarListScreen} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
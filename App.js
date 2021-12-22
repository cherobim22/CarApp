import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import UserListScreen from './src/Screens/UserList';
import WelcomeScreen from './src/Screens/Welcome';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider>  
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UserList">
                <Stack.Screen name="UserList" component={UserListScreen} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
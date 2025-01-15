import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MapPage } from './pages/map';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Map'>
        <Stack.Screen name="Map" component={MapPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
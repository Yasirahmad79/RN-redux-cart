import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductWrapper from './src/components/ProductWrapper';
import UserList from './src/components/UserList';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={ProductWrapper} />
        <Stack.Screen name='Users' component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

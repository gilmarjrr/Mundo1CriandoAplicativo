import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import CadastroFornecedorScreen from '../screens/CadastroFornecedorScreen.jsx'
import ListaFornecedoresScreen from '../screens/ListaFornecedorScreen.jsx';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'CadastroFornecedor'>
        <Stack.Screen name="CadastroFornecedor" component={CadastroFornecedorScreen} />
        <Stack.Screen name="ListaFornecedores" component={ListaFornecedoresScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
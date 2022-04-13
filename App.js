import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/views/Home';
import CalculoConsumo from './src/views/CalculoConsumo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#1D983A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >

        {
          /*
            em todas as telas(pages) é injetado na props a função navigation()
          */
        }
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Descubra o Consumo do Veiculo' }} />

        <Stack.Screen
          name="CalculoConsumo"
          component={CalculoConsumo}
          options={{ title: "Calculo Consumo de Combusítvel" }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
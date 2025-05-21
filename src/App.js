import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantesScreen from "../src/screens/RestaurantScreen";
import RestauranteDetailScreen from "../src/screens/RestauranteDetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Restaurantes" component={RestaurantesScreen} options={{ title: "Lista de Restaurantes" }} />
          <Stack.Screen name="Detalhes" component={RestauranteDetailScreen} options={{ title: "Detalhes do Restaurante" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

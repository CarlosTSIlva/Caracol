import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/pages/HomeScreen";
import ResetPassword from "./src/pages/ResetPassword";
import FinishPassword from "./src/pages/FinishPassword";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Reset" component={ResetPassword} />
        <Stack.Screen name="FinishReset" component={FinishPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

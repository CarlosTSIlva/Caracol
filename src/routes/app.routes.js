import React, { useState } from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../pages/Dashboard";
import Config from "../pages/Config";
import Associados from "../pages/Associados";
import ContaAdd from "../pages/ContaAdd";
import ThemeContext from "../context/ThemeContext";

const App = createStackNavigator();

const AppRoutes = () => (
  <>
    <StatusBar hidden={true} />
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#ffffff" },
      }}
    >
      <App.Screen name="ContaAdd" component={ContaAdd} />
    </App.Navigator>
  </>
);

export default AppRoutes;

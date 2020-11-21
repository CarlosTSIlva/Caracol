import React, { useState } from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../pages/Dashboard";
import Config from "../pages/Config";
import Associados from "../pages/Associados";
import ContaAdd from "../pages/ContaAdd";
import ContaEdit from "../pages/ContaEdit";

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
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="Config" component={Config} />
      <App.Screen name="Associados" component={Associados} />
      <App.Screen name="ContaAdd" component={ContaAdd} />
      <App.Screen name="ContaEdit" component={ContaEdit} />
    </App.Navigator>
  </>
);

export default AppRoutes;

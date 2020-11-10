import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../pages/HomeScreen";
import ResetPassword from "../pages/ResetPassword";
import FinishPassword from "../pages/FinishPassword";

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "#ffffff" },
    }}
  >
    <Auth.Screen name="HomeScreen" component={HomeScreen} />
    <Auth.Screen name="ResetPassword" component={ResetPassword} />
    <Auth.Screen name="FinishPassword" component={FinishPassword} />
  </Auth.Navigator>
);

export default AuthRoutes;

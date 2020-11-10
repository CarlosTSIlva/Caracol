import React from "react";
import Routes from "./src/routes/index";
import AppProvider from "./src/hooks";
import { NavigationContainer } from "@react-navigation/native";

const App = () => (
  <NavigationContainer>
    <AppProvider>
      <Routes />
    </AppProvider>
  </NavigationContainer>
);

export default App;

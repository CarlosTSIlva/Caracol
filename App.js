import React from "react";

import { ThemeProvider } from "./src/components/Theme/ThemeProvider";

import Routes from "./src/routes/index";
import AppProvider from "./src/hooks";
import { AppearanceProvider } from "react-native-appearance";

import { NavigationContainer } from "@react-navigation/native";

const App = () => (
  <AppearanceProvider>
    <ThemeProvider>
      <NavigationContainer>
        <AppProvider>
          <Routes />
        </AppProvider>
      </NavigationContainer>
    </ThemeProvider>
  </AppearanceProvider>
);

export default App;

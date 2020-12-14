import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../pages/Dashboard";
import Config from "../pages/Config";
import Fornecedor from "../pages/Fornecedor";
import FornecedorProduto from "../pages/FornecedorProduto";
import Associados from "../pages/Associados";
import ContaAdd from "../pages/ContaAdd";
import ContaEdit from "../pages/ContaEdit";
import ProdutosServicos from "../pages/ProdutosServicos";
import Filtros from "../pages/Filtros";
import Produto from "../pages/Produtos";

const App = createStackNavigator();

const AppRoutes = () => (
  <>
    <StatusBar hidden={true} />
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="Config" component={Config} />
      <App.Screen name="Associados" component={Associados} />
      <App.Screen name="ContaAdd" component={ContaAdd} />
      <App.Screen name="ContaEdit" component={ContaEdit} />
      <App.Screen name="FornecedorProduto" component={FornecedorProduto} />
      <App.Screen name="Filtros" component={Filtros} />
      <App.Screen name="Fornecedor" component={Fornecedor} />
      <App.Screen name="Produtos" component={ProdutosServicos} />
      <App.Screen name="Produto" component={Produto} />
    </App.Navigator>
  </>
);

export default AppRoutes;

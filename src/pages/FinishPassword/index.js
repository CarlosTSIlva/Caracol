import React, { useState, useRef } from "react";

import { StatusBar, View, Text, ScrollView } from "react-native";
import { Container, TextBlack, ViewLogin, TextPurple } from "./styles";

import * as Font from "expo-font";
import { AppLoading } from "expo";

import Folder from "../../components/Folder";

const fetchFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("../fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("../fonts/Nunito-Bold.ttf"),
  });
};

export default FinishPassword = ({ navigation }) => {
  const [dataLoader, setdataLoader] = useState(false);
  const [check, setCheck] = useState(false);
  const formRef = useRef(null);

  function handleCheck() {
    setCheck(!check);
  }

  if (!dataLoader) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setdataLoader(true)}
      />
    );
  }

  return (
    <ScrollView>
      <StatusBar backgroundColor="black" />
      <Folder />

      <Container>
        <View>
          <TextPurple
            style={{
              fontFamily: "nunito-bold",
              marginTop: 30,
              fontSize: 24,
            }}
          >
            Pronto :)
          </TextPurple>

          <TextBlack
            style={{
              fontFamily: "nunito-regular",
              fontSize: 16,
              maxWidth: 272,
              marginBottom: 25,
            }}
          >
            Um e-mail com instruções de como redefinir sua senha foi enviado.
          </TextBlack>
        </View>

        <ViewLogin onPress={() => navigation.navigate("Home")} title="Logar">
          <Text style={{ color: "#fff", fontFamily: "nunito-bold" }}>
            Voltar
          </Text>
        </ViewLogin>
      </Container>
    </ScrollView>
  );
};

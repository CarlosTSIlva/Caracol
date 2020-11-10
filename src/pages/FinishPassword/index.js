import React, { useState, useRef } from "react";

import { StatusBar, View, Text, ScrollView } from "react-native";
import { Container, TextBlack, ViewLogin, TextPurple } from "./styles";
import normalize from "../../utils/normalize";

import * as Font from "expo-font";
import { AppLoading } from "expo";
import Folder from "../../components/Folder";
const fetchFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("../fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("../fonts/Nunito-Bold.ttf"),
  });
};

const FinishPassword = ({ navigation }) => {
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
              marginTop: normalize(30),
              fontSize: normalize(24),
            }}
          >
            Pronto :)
          </TextPurple>

          <TextBlack
            style={{
              fontFamily: "nunito-regular",
              fontSize: normalize(16),
              maxWidth: normalize(272),
              marginBottom: normalize(25),
            }}
          >
            Um e-mail com instruções de como redefinir sua senha foi enviado.
          </TextBlack>
        </View>

        <ViewLogin onPress={() => navigation.navigate("HomeScreen")}>
          <Text
            style={{
              color: "#fff",
              fontSize: normalize(15),
              fontFamily: "nunito-bold",
            }}
          >
            Voltar
          </Text>
        </ViewLogin>
      </Container>
    </ScrollView>
  );
};

export default FinishPassword;

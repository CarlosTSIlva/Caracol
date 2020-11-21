import React, { useState } from "react";

import { Text, Image, View, ScrollView } from "react-native";
import { useTheme } from "../../components/Theme/ThemeProvider";

import { Container, Header, Menu, ViewLogin } from "./styles";
import normalize from "../../utils/normalize";

import { AppLoading } from "expo";
import * as Font from "expo-font";
const fetchFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("../fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("../fonts/Nunito-Bold.ttf"),
  });
};

const Associados = ({ navigation }) => {
  const { colors } = useTheme();
  const [dataLoader, setdataLoader] = useState(false);

  if (!dataLoader) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setdataLoader(true)}
      />
    );
  }

  return (
    <Container style={{ backgroundColor: colors.background }}>
      <ScrollView style={{ marginBottom: normalize(90) }}>
        <Header
          style={{ backgroundColor: colors.backgroundHeader }}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{
              width: normalize(31),
              height: normalize(36),
              marginRight: normalize(150),
            }}
            source={require("../../../assets/back.png")}
          />
          <Text
            style={{
              fontSize: normalize(18),
              color: "#6F2DA8",
              fontFamily: "nunito-regular",
            }}
          >
            Contas
          </Text>
        </Header>

        <Menu onPress={() => navigation.navigate("ContaEdit")}>
          <Image
            style={{
              width: normalize(53),
              height: normalize(52),
              marginRight: normalize(7),
            }}
            source={require("../../../assets/Morador.png")}
          />
          <View style={{ padding: normalize(6) }}>
            <Text
              style={{
                fontSize: normalize(18),
                color: "#6F2DA8",
                fontFamily: "nunito-regular",
              }}
            >
              Ielon Clésio
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: normalize(12),
                  color: colors.text,
                  fontFamily: "nunito-regular",
                }}
              >
                <Image
                  style={{ width: normalize(5), height: normalize(5) }}
                  source={require("../../../assets/dot.png")}
                />{" "}
                Morador com Permissão
              </Text>
            </View>
          </View>
        </Menu>
      </ScrollView>
      <View>
        <ViewLogin onPress={() => navigation.navigate("ContaAdd")}>
          <Text
            style={{
              color: "#fff",
              fontSize: normalize(15),
              fontFamily: "nunito-regular",
            }}
          >
            Adicionar Associado
          </Text>
        </ViewLogin>
      </View>
    </Container>
  );
};

export default Associados;

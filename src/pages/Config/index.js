import React, { useState } from "react";

import { Text, Image, View, Switch } from "react-native";

import { Header, Menu, Info, Modos, Estilo } from "./styles";
import normalize from "../../utils/normalize";
import { useTheme } from "../../components/Theme/ThemeProvider";

import { AppLoading } from "expo";
import * as Font from "expo-font";

const fetchFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("../fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("../fonts/Nunito-Bold.ttf"),
  });
};

const Config = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isOff, setisOff] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const cal_me = () => setisOff((previousState) => !previousState);
  const { setScheme, isDark } = useTheme();

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

  const toggleScheme = () => {
    isDark ? setScheme("light") : setScheme("dark");
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Header
        onPress={() => navigation.goBack()}
        style={{ backgroundColor: colors.backgroundHeader }}
      >
        <Image
          style={{
            width: normalize(31),
            height: normalize(36),
            marginRight: normalize(120),
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
          Configurações
        </Text>
      </Header>
      <Menu>
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
          <Text
            style={{
              fontSize: normalize(12),
              color: "#4F4F4F",
              fontFamily: "nunito-regular",
            }}
          >
            Morador Titular
          </Text>
        </View>
      </Menu>
      <View>
        <Info>
          <Text
            style={{
              fontSize: normalize(18),
              color: "#4F4F4F",
              marginTop: normalize(3),
              marginRight: normalize(178),
              fontFamily: "nunito-regular",
            }}
          >
            Informações pessoais
          </Text>
          <Image
            style={{ width: normalize(38), height: normalize(36) }}
            source={require("../../../assets/next.png")}
          />
        </Info>
        <Info>
          <Text
            style={{
              fontSize: normalize(18),
              fontFamily: "nunito-regular",
              color: "#4F4F4F",
              marginTop: normalize(3),
              marginRight: normalize(248),
            }}
          >
            Pagamentos
          </Text>
          <Image
            style={{ width: normalize(38), height: normalize(36) }}
            source={require("../../../assets/next.png")}
          />
        </Info>
        <Info onPress={() => navigation.navigate("Associados")}>
          <Text
            style={{
              fontFamily: "nunito-regular",
              fontSize: normalize(18),
              color: "#4F4F4F",
              marginTop: normalize(3),
              marginRight: normalize(291),
            }}
          >
            Contas
          </Text>
          <Image
            style={{ width: normalize(38), height: normalize(36) }}
            source={require("../../../assets/next.png")}
          />
        </Info>
        <Info>
          <Text
            style={{
              fontFamily: "nunito-regular",
              fontSize: normalize(18),
              color: "#4F4F4F",
              marginTop: normalize(3),
              marginRight: normalize(247),
            }}
          >
            Notificações
          </Text>
          <Image
            style={{ width: normalize(38), height: normalize(36) }}
            source={require("../../../assets/next.png")}
          />
        </Info>
      </View>

      <View style={{ marginTop: normalize(130) }}>
        <Modos>
          <Text style={{ color: colors.text, fontFamily: "nunito-regular" }}>
            Modo silencioso
          </Text>
          <Estilo>
            <Switch
              trackColor={{ false: "#767577", true: "#6F2DA8" }}
              thumbColor={isEnabled ? "#6F2DA8" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </Estilo>
        </Modos>
        <Modos>
          <Text style={{ color: colors.text, fontFamily: "nunito-regular" }}>
            Tema Escuro
          </Text>
          <Estilo>
            <Switch
              trackColor={{ false: "#767577", true: "#6F2DA8" }}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleScheme}
              value={isDark}
            />
          </Estilo>
        </Modos>
        <Modos>
          <Text style={{ color: colors.text, fontFamily: "nunito-regular" }}>
            Deseja receber ligação?
          </Text>
          <Estilo>
            <Switch
              trackColor={{ false: "#767577", true: "#6F2DA8" }}
              thumbColor={isOff ? "#6F2DA8" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={cal_me}
              value={isOff}
            />
          </Estilo>
        </Modos>
      </View>
    </View>
  );
};

export default Config;

import React, { useState } from "react";
import { View, Image, Text, ScrollView } from "react-native";
import {
  Settings,
  ViewName,
  Container,
  Quadro,
  Dados,
  Navegaçao,
  Menu,
  Config,
} from "./styles";
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

const Dashboard = ({ navigation }) => {
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
    <View style={{ backgroundColor: colors.background }}>
      <ScrollView style={{ backgroundColor: colors.background }}>
        <Container style={{ backgroundColor: colors.background }}>
          <Settings
            style={{
              backgroundColor: colors.backgroundHeader,
            }}
          >
            <Image
              style={{
                width: normalize(98),
                height: normalize(102),
              }}
              source={require("../../../assets/Perfil.png")}
            />
            <View>
              <ViewName>
                <Text
                  style={{
                    fontSize: normalize(18),
                    color: "#6f2da8",
                    fontFamily: "nunito-regular",
                  }}
                >
                  Olá, Carlos
                </Text>
                <Config onPress={() => navigation.navigate("Config")}>
                  <Image
                    style={{ width: normalize(28), height: normalize(28) }}
                    source={require("../../../assets/config.png")}
                  />
                </Config>
              </ViewName>
              <View style={{ marginLeft: normalize(8) }}>
                <Text
                  style={{ color: colors.text, fontFamily: "nunito-regular" }}
                >
                  Bloco: <Text>A</Text>
                </Text>
                <Text
                  style={{ color: colors.text, fontFamily: "nunito-regular" }}
                >
                  Apartamento: <Text>123</Text>
                </Text>
              </View>
            </View>
          </Settings>
          <Quadro>
            <Text style={{ color: colors.text, fontFamily: "nunito-regular" }}>
              Encomendas
            </Text>
            <Dados>
              <Image
                style={{
                  width: normalize(40),
                  height: normalize(40),
                  marginRight: normalize(14),
                }}
                source={require("../../../assets/Encomenda.png")}
              />
              <View>
                <Text
                  style={{ color: colors.text, fontFamily: "nunito-regular" }}
                >
                  Encomenda Frágil
                </Text>
                <Text
                  style={{
                    marginLeft: normalize(2),
                    color: colors.text,
                    fontFamily: "nunito-regular",
                  }}
                >
                  01/01/2020
                </Text>
              </View>
            </Dados>
            <Dados>
              <Image
                style={{
                  width: normalize(40),
                  height: normalize(40),
                  marginRight: normalize(14),
                }}
                source={require("../../../assets/Encomenda.png")}
              />
              <View>
                <Text
                  style={{ color: colors.text, fontFamily: "nunito-regular" }}
                >
                  Encomenda Correio
                </Text>
                <Text
                  style={{
                    marginLeft: normalize(2),
                    color: colors.text,
                    fontFamily: "nunito-regular",
                  }}
                >
                  01/01/2020
                </Text>
              </View>
            </Dados>
          </Quadro>
          <Quadro>
            <Text style={{ color: colors.text, fontFamily: "nunito-regular" }}>
              Próximas Reservas
            </Text>
            <Dados>
              <Image
                style={{
                  width: normalize(40),
                  height: normalize(40),
                  marginRight: normalize(14),
                }}
                source={require("../../../assets/Encomenda.png")}
              />
              <View>
                <Text
                  style={{ color: colors.text, fontFamily: "nunito-regular" }}
                >
                  Quadra de Tênis
                </Text>
                <Text
                  style={{
                    marginLeft: normalize(2),
                    color: colors.text,
                    fontFamily: "nunito-regular",
                  }}
                >
                  01/01/2020
                </Text>
              </View>
            </Dados>
            <Dados>
              <Image
                style={{
                  width: normalize(40),
                  height: normalize(40),
                  marginRight: normalize(14),
                }}
                source={require("../../../assets/Encomenda.png")}
              />
              <View>
                <Text
                  style={{ color: colors.text, fontFamily: "nunito-regular" }}
                >
                  Churrasqueira
                </Text>
                <Text
                  style={{
                    marginLeft: normalize(2),
                    color: colors.text,
                    fontFamily: "nunito-regular",
                  }}
                >
                  01/01/2020
                </Text>
              </View>
            </Dados>
          </Quadro>
        </Container>
      </ScrollView>
      <Navegaçao style={{ backgroundColor: colors.background }}>
        <Menu>
          <Image
            style={{
              width: normalize(20),
              height: normalize(22),
              marginBottom: normalize(17),
            }}
            source={require("../../../assets/home.png")}
          />
          <Text
            style={{
              color: "#ffff",
              fontSize: normalize(14),
              fontFamily: "nunito-regular",
            }}
          >
            Home
          </Text>
        </Menu>
        <Menu>
          <Image
            style={{
              width: normalize(20),
              height: normalize(22),
              marginBottom: normalize(2),
            }}
            source={require("../../../assets/money.png")}
          />
          <Text
            style={{
              color: "#ffff",
              fontSize: normalize(14),
              fontFamily: "nunito-regular",
            }}
          >
            Produtos & Serviços
          </Text>
        </Menu>
      </Navegaçao>
    </View>
  );
};

export default Dashboard;

import React, { useState, useRef } from "react";

import { Text, Image, View, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "../../components/Theme/ThemeProvider";
import { Form } from "@unform/mobile";
import Input from "../../components/Input";

import { Container, Header, View2, ViewLogin } from "./styles";
import normalize from "../../utils/normalize";
import { AppLoading } from "expo";
import * as Font from "expo-font";
const fetchFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("../fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("../fonts/Nunito-Bold.ttf"),
  });
};

const Produto = ({ navigation }) => {
  const [counter, setCounter] = useState(0);
  const { colors } = useTheme();
  const [dataLoader, setdataLoader] = useState(false);
  const formRef = useRef(null);

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
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: colors.backgroundHeader,
            marginBottom: normalize(5),
          }}
        >
          <View style={{ marginTop: normalize(17) }}>
            <Text
              style={{
                fontSize: normalize(25),
                color: colors.text,

                fontFamily: "nunito-bold",
              }}
            >
              Produtos & Serviços
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: normalize(8),
              marginBottom: normalize(8),
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{
                  width: normalize(31),
                  height: normalize(36),
                  marginRight: normalize(70),
                }}
                source={require("../../../assets/back.png")}
              />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    fontSize: normalize(15),
                    color: "#6F2DA8",
                    fontFamily: "nunito-bold",
                  }}
                >
                  Pedido Online
                </Text>
                <Text
                  style={{
                    fontSize: normalize(18),
                    color: "#6F2DA8",
                    fontFamily: "nunito-bold",
                  }}
                >
                  Vem que tem Frutas
                </Text>
              </View>
            </View>
            <Image
              style={{
                width: normalize(53),
                height: normalize(50),
                marginLeft: 63,
              }}
              source={require("../../../assets/carrinho.png")}
            />
          </View>
        </Header>
        <Form ref={formRef}>
          <View2 style={{ marginBottom: normalize(35) }}>
            <View>
              <Input
                style={{
                  height: normalize(54),
                  width: normalize(350),
                  marginBottom: normalize(15),
                  paddingHorizontal: normalize(12),
                  paddingVertical: normalize(16),
                  marginTop: normalize(20),
                  marginLeft: normalize(-15),
                  fontSize: normalize(15),
                }}
                name="Pesquisar"
                type="pesquisar"
                placeholder="Pesquisar"
                autoCorrect={false}
                autoCapitalize="none"
              />
            </View>
            <View>
              <Image
                style={{
                  width: normalize(40),
                  height: normalize(40),
                }}
                source={require("../../../assets/busca.png")}
              />
            </View>
          </View2>
        </Form>
        <View
          style={{
            borderColor: "#F2F2F2",
            borderRadius: 5,
            borderWidth: 0.5,
            margin: normalize(9),
            padding: normalize(3),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingLeft: normalize(13),
              marginTop: normalize(5),
            }}
          >
            <Image
              style={{
                width: normalize(68),
                height: normalize(68),
                marginRight: normalize(25),
                marginRight: normalize(25),
              }}
              source={require("../../../assets/maca.png")}
            />
            <View>
              <Text style={{ fontSize: normalize(15), color: "#6F2DA8" }}>
                Maçãs
              </Text>
              <Text
                style={{
                  fontSize: normalize(12),

                  color: colors.text,
                }}
              >
                Maçãs do tipo exportação ...
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: normalize(50),
              paddingRight: normalize(50),
              borderColor: "#BDBDBD",
              borderRadius: 5,
              borderWidth: 0.5,
              margin: normalize(12),
            }}
          >
            <TouchableOpacity onPress={() => setCounter(counter + 1)}>
              <Text style={{ fontSize: normalize(30), color: colors.text }}>
                +
              </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: normalize(30), color: colors.text }}>
              {counter}
            </Text>
            <TouchableOpacity onPress={() => setCounter(counter - 1)}>
              <Text style={{ fontSize: normalize(30), color: colors.text }}>
                -
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <ViewLogin style={{ backgroundColor: "#6F2DA8" }}>
        <Text
          style={{
            color: colors.background,
            fontSize: normalize(18),
            color: "#ffff",
          }}
        >
          Enviar Pedido
        </Text>
      </ViewLogin>
    </Container>
  );
};

export default Produto;

import React, { useState } from "react";

import { Text, Image, View, ScrollView, Linking } from "react-native";
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

const FornecedorProduto = ({ navigation }) => {
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
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: colors.backgroundHeader }}
        >
          <View style={{ marginTop: normalize(17) }}>
            <Text
              style={{
                color: colors.text,

                fontSize: normalize(18),
                fontFamily: "nunito-bold",
              }}
            >
              Produtos & Serviços
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginLeft: normalize(-90),
              marginTop: normalize(8),
            }}
          >
            <Image
              style={{
                width: normalize(31),
                height: normalize(36),
                marginRight: normalize(70),
              }}
              source={require("../../../assets/back.png")}
            />
            <Text
              style={{
                fontSize: normalize(18),
                color: "#6F2DA8",
                fontFamily: "nunito-bold",
              }}
            >
              Detalhes do Fornecedor
            </Text>
          </View>
        </Header>
        <Image
          style={{
            width: normalize(420),
            height: normalize(150),
          }}
          source={require("../../../assets/frutas.png")}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: normalize(20),
              marginLeft: normalize(10),
              fontFamily: "nunito-bold",
              color: "#6f2da8",
            }}
          >
            Vem que tem Frutas
          </Text>
          <Image
            style={{
              width: normalize(18),
              height: normalize(18),
              marginLeft: normalize(60),
            }}
            source={require("../../../assets/Estrela.png")}
          />
          <Text
            style={{
              fontSize: normalize(13),
              color: "#F2C94C",
              padding: normalize(2),
            }}
          >
            4,5 (1000)
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",

            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: normalize(5),
              height: normalize(5),
              marginLeft: normalize(10),
            }}
            source={require("../../../assets/dot.png")}
          />
          <Text
            style={{
              color: colors.text,

              fontSize: normalize(20),
              padding: normalize(2),
              marginLeft: normalize(3),
              marginRight: normalize(60),
            }}
          >
            Feira Livre
          </Text>
          <Image
            style={{
              width: normalize(5),
              height: normalize(5),
              marginLeft: normalize(115),
            }}
            source={require("../../../assets/dot.png")}
          />
          <Text
            style={{
              color: colors.text,

              fontSize: normalize(13),
              padding: normalize(2),
              marginLeft: normalize(3),
            }}
          >
            1,0 Km
          </Text>
        </View>
        <Text
          style={{
            padding: normalize(10),

            color: colors.text,
          }}
        >
          Venda de Frutas de todos os tipos e todas as épocas. Com mais de 10
          anos de história e bons serviços prestados.
        </Text>
      </ScrollView>
      <ViewLogin
        onPress={() => navigation.navigate("Produto")}
        style={{ backgroundColor: "#6F2DA8" }}
      >
        <Text
          style={{
            color: "#ffff",

            fontSize: normalize(18),
          }}
        >
          Pedir Online
        </Text>
      </ViewLogin>
      <ViewLogin
        onPress={() =>
          Linking.openURL(
            "https://api.whatsapp.com/send?phone=5535988929226&text=Bem%20Vindo%20a%20minha%20plataforma!"
          )
        }
      >
        <Image
          style={{
            width: normalize(20),
            height: normalize(20),
            marginLeft: normalize(25),
          }}
          source={require("../../../assets/whats.png")}
        />
        <Text
          style={{
            color: "#ffff",

            fontSize: normalize(18),
            marginLeft: normalize(25),
          }}
        >
          Entrar em contato
        </Text>
      </ViewLogin>
    </Container>
  );
};

export default FornecedorProduto;

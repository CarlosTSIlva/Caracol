import React, { useState } from "react";

import { Text, Image, View, ScrollView } from "react-native";
import { useTheme } from "../../components/Theme/ThemeProvider";

import { Container, Header, Menu, ViewLogin, View2 } from "./styles";
import normalize from "../../utils/normalize";
import { AppLoading } from "expo";
import * as Font from "expo-font";
const fetchFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("../fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("../fonts/Nunito-Bold.ttf"),
  });
};

const Filtros = ({ navigation }) => {
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
                fontSize: 18,
                fontFamily: "nunito-bold",
                color: colors.text,
              }}
            >
              Produtos & Serviços
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginLeft: normalize(-125),
              marginTop: normalize(8),
            }}
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
                fontFamily: "nunito-bold",
              }}
            >
              Piscina
            </Text>
          </View>
        </Header>

        <Text
          style={{
            fontSize: normalize(18),
            fontFamily: "nunito-bold",
            marginLeft: normalize(9),
          }}
        >
          Produtos & Serviços
        </Text>
        <View2 onPress={() => navigation.navigate("Fornecedor")}>
          <Image
            style={{
              width: normalize(40),
              height: normalize(40),
              borderRadius: normalize(50),
              marginRight: normalize(12),
            }}
            source={require("../../../assets/Limpesa.png")}
          />
          <View>
            <Text
              style={{
                fontFamily: "nunito-bold",
                color: "#6F2DA8",
                fontSize: normalize(14),
              }}
            >
              Nado Livre Piscinas
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ width: normalize(18), height: normalize(18) }}
                source={require("../../../assets/Estrela.png")}
              />
              <Text
                style={{
                  fontFamily: "nunito-bold",
                  fontSize: normalize(14),
                  padding: normalize(2),
                }}
              >
                4,5
              </Text>
              <Image
                style={{
                  width: normalize(5),
                  height: normalize(5),
                  marginLeft: normalize(6),
                }}
                source={require("../../../assets/dot.png")}
              />
              <Text
                style={{
                  fontFamily: "nunito-bold",
                  fontSize: normalize(14),
                  padding: normalize(2),
                  marginLeft: normalize(3),
                }}
              >
                Piscinas
              </Text>
              <Image
                style={{
                  width: normalize(5),
                  height: normalize(5),
                  marginLeft: normalize(45),
                }}
                source={require("../../../assets/dot.png")}
              />
              <Text
                style={{
                  fontFamily: "nunito-bold",
                  fontSize: normalize(14),
                  padding: normalize(2),
                  marginLeft: normalize(3),
                }}
              >
                1,0 Km
              </Text>
            </View>
          </View>
        </View2>
        <View2 onPress={() => navigation.navigate("FornecedorProduto")}>
          <Image
            style={{
              width: normalize(40),
              height: normalize(40),
              borderRadius: normalize(50),
              marginRight: normalize(12),
            }}
            source={require("../../../assets/Limpesa.png")}
          />
          <View>
            <Text
              style={{
                fontFamily: "nunito-bold",
                fontSize: normalize(14),
                color: "#6F2DA8",
              }}
            >
              Bela Flor Jardinagem
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ width: normalize(18), height: normalize(18) }}
                source={require("../../../assets/Estrela.png")}
              />
              <Text
                style={{
                  fontFamily: "nunito-bold",
                  fontSize: normalize(14),
                  padding: normalize(2),
                }}
              >
                4,5
              </Text>
              <Image
                style={{
                  width: normalize(5),
                  height: normalize(5),
                  marginLeft: normalize(6),
                }}
                source={require("../../../assets/dot.png")}
              />
              <Text
                style={{
                  fontFamily: "nunito-bold",
                  fontSize: normalize(14),
                  padding: normalize(2),
                  marginLeft: normalize(3),
                }}
              >
                Piscinas
              </Text>
              <Image
                style={{
                  width: normalize(5),
                  height: normalize(5),
                  marginLeft: normalize(45),
                }}
                source={require("../../../assets/dot.png")}
              />
              <Text
                style={{
                  fontFamily: "nunito-bold",
                  fontSize: normalize(14),
                  padding: normalize(2),
                  marginLeft: normalize(3),
                }}
              >
                1,0 Km
              </Text>
            </View>
          </View>
        </View2>
        <View2>
          <Image
            style={{
              width: normalize(40),
              height: normalize(40),
              borderRadius: normalize(50),
              marginRight: normalize(12),
            }}
            source={require("../../../assets/Limpesa.png")}
          />
          <View>
            <Text
              style={{
                fontFamily: "nunito-bold",
                fontSize: normalize(14),
                color: "#6F2DA8",
              }}
            >
              Ventania Ar Condicionado
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ width: normalize(18), height: normalize(18) }}
                source={require("../../../assets/Estrela.png")}
              />
              <Text
                style={{
                  fontFamily: "nunito-bold",
                  fontSize: normalize(14),
                  padding: normalize(2),
                }}
              >
                4,5
              </Text>
              <Image
                style={{
                  width: normalize(5),
                  height: normalize(5),
                  marginLeft: normalize(6),
                }}
                source={require("../../../assets/dot.png")}
              />
              <Text
                style={{
                  fontFamily: "nunito-bold",
                  fontSize: normalize(14),
                  padding: normalize(2),
                  marginLeft: normalize(3),
                }}
              >
                Piscinas
              </Text>
              <Image
                style={{
                  width: normalize(5),
                  height: normalize(5),
                  marginLeft: normalize(45),
                }}
                source={require("../../../assets/dot.png")}
              />
              <Text
                style={{
                  fontFamily: "nunito-bold",
                  fontSize: normalize(14),
                  padding: normalize(2),
                  marginLeft: normalize(3),
                }}
              >
                1,0 Km
              </Text>
            </View>
          </View>
        </View2>
      </ScrollView>
    </Container>
  );
};

export default Filtros;

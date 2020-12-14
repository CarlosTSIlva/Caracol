import React, { useState, useEffect, useRef } from "react";
import { View, Image, Text, ScrollView, Button, FlatList } from "react-native";
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
import moment from "moment";
import normalize from "../../utils/normalize";
import { useTheme } from "../../components/Theme/ThemeProvider";
import { AppLoading } from "expo";

import api from "../../services/api";
import { useAuth } from "../../hooks/auth";
import * as Font from "expo-font";
const fetchFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("../fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("../fonts/Nunito-Bold.ttf"),
  });
};

const Dashboard = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const { colors } = useTheme();
  const { signOut, dados } = useAuth();
  const [encomendas, setEncomendas] = useState([]);
  const [reservas, setReservas] = useState([]);
  useEffect(
    (async) => () => {
      api
        .get(`/unidade/${dados.data?.contas[0]?.unidade.id}/encomenda`)
        .then((res) => {
          setEncomendas(res.data);
        });
      api
        .get(`/unidade/${dados.data?.contas[0]?.unidade.id}/schedule`)
        .then((res) => {
          setReservas(res.data);
        });
      if (!loading) {
        return (
          <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setLoading(true)}
          />
        );
      }
    },

    []
  );

  return (
    <View
      style={{
        backgroundColor: colors.background,
        paddingTop: normalize(10),
        paddingBottom: normalize(38),
      }}
    >
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
              <Button title="sair" onPress={signOut} />
              <ViewName>
                <Text
                  style={{
                    fontSize: normalize(18),
                    color: "#6f2da8",
                    maxWidth: 103,
                    fontFamily: "nunito-regular",
                  }}
                >
                  Olá, {dados.data?.info.nome}
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
        </Container>
        <View style={{ marginLeft: normalize(12) }}>
          <Quadro>
            <Text style={{ color: colors.text, fontFamily: "nunito-regular" }}>
              Encomendas
            </Text>

            <ScrollView style={{ height: 150 }}>
              <FlatList
                data={encomendas.data?.encomendas}
                keyExtractor={(encomendas) => encomendas.id}
                renderItem={({ item: encomendas }) => (
                  <Dados>
                    <Image
                      style={{
                        width: normalize(40),
                        height: normalize(40),
                        marginRight: normalize(14),
                      }}
                      source={{ uri: encomendas.imagem }}
                    />
                    <View>
                      <Text
                        style={{
                          color: colors.text,
                          fontFamily: "nunito-regular",
                        }}
                      >
                        {encomendas.tipo.descricao}
                      </Text>
                      <Text
                        style={{
                          marginLeft: normalize(2),
                          color: colors.text,
                          fontFamily: "nunito-regular",
                        }}
                      >
                        {encomendas.status.descricao}
                      </Text>
                    </View>
                  </Dados>
                )}
              />
            </ScrollView>
          </Quadro>
        </View>

        <Quadro style={{ marginLeft: normalize(12) }}>
          <Text style={{ color: colors.text, fontFamily: "nunito-regular" }}>
            Proxima Reservas
          </Text>
          <ScrollView style={{ height: 150 }}>
            <FlatList
              data={reservas?.data}
              keyExtractor={(reservas) => reservas.id}
              renderItem={({ item: reservas }) => (
                <Dados>
                  <Image
                    style={{
                      width: normalize(40),
                      height: normalize(40),
                      marginRight: normalize(14),
                    }}
                    source={{ uri: reservas.areacomum.imagem }}
                  />
                  <View>
                    <Text
                      style={{
                        color: colors.text,
                        fontFamily: "nunito-regular",
                      }}
                    >
                      {reservas.areacomum.nome}
                    </Text>
                    <Text
                      style={{
                        marginLeft: normalize(2),
                        color: colors.text,
                        fontFamily: "nunito-regular",
                      }}
                    >
                      {moment().add(10, "days").calendar(`${reservas.inicio}`)}{" "}
                    </Text>
                  </View>
                </Dados>
              )}
            />
          </ScrollView>
        </Quadro>
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
        <Menu onPress={() => navigation.navigate("Produtos")}>
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

import React from "react";

import { Text, Image, View, ScrollView } from "react-native";

import { Container, Header, Menu, ViewLogin } from "./styles";

const Associados = () => {
  return (
    <Container>
      <ScrollView style={{ marginBottom: 90 }}>
        <Header>
          <Image
            style={{ width: 31, height: 36, marginRight: 123 }}
            source={require("../../../assets/back.png")}
          />
          <Text style={{ fontSize: 18, color: "#6F2DA8" }}>Contas</Text>
        </Header>
        <Menu>
          <Image
            style={{ width: 53, height: 52, marginRight: 7 }}
            source={require("../../../assets/Morador.png")}
          />
          <View style={{ padding: 6 }}>
            <Text style={{ fontSize: 18, color: "#6F2DA8" }}>Ielon Clésio</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 12, color: "#4F4F4F" }}>
                <Image
                  style={{ width: 5, height: 5 }}
                  source={require("../../../assets/dot.png")}
                />{" "}
                Morador com Permissão
              </Text>
            </View>
          </View>
        </Menu>
        <Menu>
          <Image
            style={{ width: 53, height: 52, marginRight: 7 }}
            source={require("../../../assets/Morador.png")}
          />
          <View style={{ padding: 6 }}>
            <Text style={{ fontSize: 18, color: "#6F2DA8" }}>Ielon Clésio</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 12, color: "#4F4F4F" }}>
                <Image
                  style={{ width: 5, height: 5 }}
                  source={require("../../../assets/dot.png")}
                />{" "}
                Morador com Permissão
              </Text>
            </View>
          </View>
        </Menu>
        <Menu>
          <Image
            style={{ width: 53, height: 52, marginRight: 7 }}
            source={require("../../../assets/Morador.png")}
          />
          <View style={{ padding: 6 }}>
            <Text style={{ fontSize: 18, color: "#6F2DA8" }}>Ielon Clésio</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 12, color: "#4F4F4F" }}>
                <Image
                  style={{ width: 5, height: 5 }}
                  source={require("../../../assets/dot.png")}
                />{" "}
                Morador com Permissão
              </Text>
            </View>
          </View>
        </Menu>
        <Menu>
          <Image
            style={{ width: 53, height: 52, marginRight: 7 }}
            source={require("../../../assets/Morador.png")}
          />
          <View style={{ padding: 6 }}>
            <Text style={{ fontSize: 18, color: "#6F2DA8" }}>Ielon Clésio</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 12, color: "#4F4F4F" }}>
                <Image
                  style={{ width: 5, height: 5 }}
                  source={require("../../../assets/dot.png")}
                />{" "}
                Morador com Permissão
              </Text>
            </View>
          </View>
        </Menu>
      </ScrollView>
      <View>
        <ViewLogin onPress={() => {}} title="Logar">
          <Text
            style={{
              color: "#fff",
              fontSize: 15,
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

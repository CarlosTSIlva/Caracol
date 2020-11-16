import React, { useState } from "react";

import { Text, Image, View, Switch } from "react-native";

import { Container, Header, Menu, Info, Modos, Estilo } from "./styles";

const Config = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDesativado, setisDesativado] = useState(false);
  const [isOff, setisOff] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const Theme = () => setisDesativado((previousState) => !previousState);
  const cal_me = () => setisOff((previousState) => !previousState);

  return (
    <Container>
      <Header>
        <Image
          style={{ width: 31, height: 36, marginRight: 98 }}
          source={require("../../../assets/back.png")}
        />
        <Text style={{ fontSize: 18, color: "#6F2DA8" }}>Configurações</Text>
      </Header>
      <Menu>
        <Image
          style={{ width: 53, height: 52, marginRight: 7 }}
          source={require("../../../assets/Morador.png")}
        />
        <View style={{ padding: 6 }}>
          <Text style={{ fontSize: 18, color: "#6F2DA8" }}>Ielon Clésio</Text>
          <Text style={{ fontSize: 12, color: "#4F4F4F" }}>
            Morador Titular
          </Text>
        </View>
      </Menu>
      <View>
        <Info>
          <Text
            style={{
              fontSize: 18,
              color: "#4F4F4F",
              marginTop: 3,
              marginRight: 128,
            }}
          >
            Informações pessoais
          </Text>
          <Image
            style={{ width: 38, height: 36 }}
            source={require("../../../assets/next.png")}
          />
        </Info>
        <Info>
          <Text
            style={{
              fontSize: 18,
              color: "#4F4F4F",
              marginTop: 3,
              marginRight: 203,
            }}
          >
            Pagamentos
          </Text>
          <Image
            style={{ width: 38, height: 36 }}
            source={require("../../../assets/next.png")}
          />
        </Info>
        <Info>
          <Text
            style={{
              fontSize: 18,
              color: "#4F4F4F",
              marginTop: 3,
              marginRight: 248,
            }}
          >
            Contas
          </Text>
          <Image
            style={{ width: 38, height: 36 }}
            source={require("../../../assets/next.png")}
          />
        </Info>
        <Info>
          <Text
            style={{
              fontSize: 18,
              color: "#4F4F4F",
              marginTop: 3,
              marginRight: 203,
            }}
          >
            Notificações
          </Text>
          <Image
            style={{ width: 38, height: 36 }}
            source={require("../../../assets/next.png")}
          />
        </Info>
      </View>

      <View style={{ marginTop: 130 }}>
        <Modos>
          <Text>Modo silencioso</Text>
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
          <Text>Tema Escuro</Text>
          <Estilo>
            <Switch
              trackColor={{ false: "#767577", true: "#6F2DA8" }}
              thumbColor={isDesativado ? "#6F2DA8" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={Theme}
              value={isDesativado}
            />
          </Estilo>
        </Modos>
        <Modos>
          <Text>Deseja receber ligação?</Text>
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
    </Container>
  );
};

export default Config;

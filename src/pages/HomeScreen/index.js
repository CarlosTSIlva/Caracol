import React, { useState, useRef, useCallback } from "react";

import { StatusBar, View, Text, Alert, Image, ScrollView } from "react-native";
import {
  Container,
  Esquecisenha,
  EsquecisenhaText,
  View2,
  TextBlack,
  ViewLogin,
  TextPurple,
} from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

import { Form } from "@unform/mobile";
import * as Yup from "yup";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Folder from "../../components/Folder";
import Input from "../../components/Input";
import CheckBox from "../../components/checkBox";
import api from "../../services/api";
import { NavigationContainer } from "@react-navigation/native";

const fetchFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("../fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("../fonts/Nunito-Bold.ttf"),
  });
};

export default HomeScreen = ({ navigation }) => {
  const [dataLoader, setdataLoader] = useState(false);
  const [check, setCheck] = useState(false);
  const formRef = useRef(null);

  const [visible, setVisibility] = React.useState(false);

  const icon = !visible ? "eye-slash" : "eye";

  const handleSubmit = useCallback(async (data) => {
    console.log(data);
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string().min(3, "Nome obrigatório!"),

        password: Yup.string().min(6, "Senha muito curta"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      await api.get("/authenticateUsuario", data);
      const casa = await api.get("/authenticateUsuario", data);
      console.log(casa);
    } catch (err) {
      if (err) {
        if (err instanceof Yup.ValidationError) {
          Alert.alert(
            "Erro no login",
            "Ocorreu um erro ao fazer longin, cheque as credenciais"
          );
        }
      }
    }
  }, []);

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
              marginTop: 30,
              marginLeft: -206,
              fontSize: 14,
            }}
          >
            Seja bem-vindo(a)
          </TextPurple>

          <TextBlack
            style={{
              fontFamily: "nunito-regular",
              fontSize: 13,
              marginBottom: 25,
              marginLeft: -154,
            }}
          >
            Faça seu login para continuar.
          </TextBlack>
        </View>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <View2>
            <View>
              <Input
                style={{
                  height: 50,
                  width: 265,
                  marginBottom: 15,
                  paddingHorizontal: 12,
                  paddingVertical: 16,
                  marginTop: 20,
                  marginLeft: -15,
                  fontSize: 15,
                }}
                name="username"
                type="username"
                placeholder="username"
                autoCorrect={false}
                autoCapitalize="none"
              />
            </View>
            <View>
              <Image
                style={{ width: 37, height: 32 }}
                source={require("../../../assets/usericon.png")}
              />
            </View>
          </View2>

          <View2 style={{ marginBottom: 35 }}>
            <View>
              <Input
                style={{
                  height: 50,
                  width: 265,
                  marginBottom: 15,
                  paddingHorizontal: 12,
                  paddingVertical: 16,
                  marginTop: 20,
                  marginLeft: -15,
                  fontSize: 15,
                }}
                name="password"
                type="password"
                placeholder="Senha"
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={!visible}
              />
            </View>
            <View>
              <Icon
                name={icon}
                color={"#9e9e9e"}
                onPress={() => setVisibility(!visible)}
                size={30}
                style={{
                  padding: 3,
                  textAlign: "center",
                  textAlignVertical: "center",
                }}
              />
            </View>
          </View2>

          <Esquecisenha onPress={() => navigation.navigate("Reset")}>
            <EsquecisenhaText style={{ fontFamily: "nunito-bold" }}>
              Esqueci a senha
            </EsquecisenhaText>
          </Esquecisenha>

          <CheckBox
            label="Mantenha-me conectado"
            labelStyle={{ color: "#000000", fontSize: 15 }}
            iconColor="#000000"
            checkColor="#000000"
            value={check}
            onChange={handleCheck}
          />
          <ViewLogin onPress={() => formRef.current.submitForm()} title="Logar">
            <Text style={{ color: "#fff", fontFamily: "nunito-bold" }}>
              Entrar
            </Text>
          </ViewLogin>
        </Form>
      </Container>
    </ScrollView>
  );
};

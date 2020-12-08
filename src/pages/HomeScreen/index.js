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
import normalize from "../../utils/normalize";

import { Form } from "@unform/mobile";
import * as Yup from "yup";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { useAuth } from "../../hooks/auth";
import Folder from "../../components/Folder";
import Input from "../../components/Input";
import CheckBox from "../../components/checkBox";

const fetchFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("../fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("../fonts/Nunito-Bold.ttf"),
  });
};

const HomeScreen = ({ navigation }) => {
  const [dataLoader, setdataLoader] = useState(false);
  const [check, setCheck] = useState(false);
  const formRef = useRef(null);

  const [visible, setVisibility] = useState(false);

  const icon = !visible ? "eye-slash" : "eye";

  const { singIn } = useAuth();

  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string().min(3, "Nome obrigatório!"),

        password: Yup.string().min(6, "Senha muito curta"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      await singIn({
        application: "CRCL_APP",
        username: data.username,
        password: data.password,
      });
    } catch (err) {
      if (err) {
        if (err instanceof Yup.ValidationError) {
          Alert.alert(
            "Erro no login",
            "Ocorreu um erro ao fazer login, cheque as credenciais"
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
        <View style={{ marginBottom: normalize(30), marginTop: normalize(30) }}>
          <Text
            style={{
              fontFamily: "nunito-bold",
              color: "#000",
              fontSize: normalize(18),
              paddingLeft: normalize(10),
              paddingTop: normalize(20),
              textAlign: "left"
            }}
          >
            Seja bem-vindo(a)
          </Text>
          <Text
            style={{
              fontFamily: "nunito-regular",
              color: "#000",
              fontSize: normalize(14),
              paddingLeft: normalize(10),
              paddingTop: normalize(2),
              textAlign: "left"
            }}
          >
            Faça seu login para continuar.
          </Text>
        </View>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <View2>
            <View>
              <Input
                style={{
                  height: normalize(54),
                  width: normalize(360),
                  marginBottom: normalize(15),
                  paddingHorizontal: normalize(12),
                  paddingVertical: normalize(16),
                  marginTop: normalize(20),
                  fontSize: normalize(15),
                }}
                name="username"
                type="username"
                placeholder="Username"
                autoCorrect={false}
                autoCapitalize="none"
              />
            </View>
            <View>
              <Image
                style={{ width: normalize(37), height: normalize(32), padding: normalize(3), }}
                source={require("../../../assets/usericon.png")}
              />
            </View>
          </View2>

          <View2 style={{ marginBottom: normalize(35) }}>
            <View>
              <Input
                style={{
                  height: normalize(54),
                  width: normalize(360),
                  marginBottom: normalize(15),
                  paddingHorizontal: normalize(12),
                  paddingVertical: normalize(16),
                  marginTop: normalize(20),
                  marginLeft: normalize(-15),
                  fontSize: normalize(15),
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
                size={normalize(30)}
                style={{
                  padding: normalize(3),
                  textAlign: "center",
                  textAlignVertical: "center",
                }}
              />
            </View>
          </View2>

          <View style={{ alignItems: "flex-end" }} onPress={() => navigation.navigate("ResetPassword")}>
            <Text style={{ fontFamily: "nunito-bold", fontSize: normalize(14), paddingEnd: normalize(14) }}>
              Esqueci a senha
            </Text>
          </View>

          <View style={{ paddingLeft: normalize(10), paddingTop: normalize(10)}}>
            <CheckBox
              label="Mantenha-me conectado"
              labelStyle={{ color: "#000000", fontSize: normalize(14), fontFamily: "nunito-bold" }}
              iconColor="#000000"
              checkColor="#000000"
              value={check}
              onChange={handleCheck}
            />
          </View>
          <ViewLogin onPress={() => formRef.current.submitForm()} title="Logar">
            <Text
              style={{
                color: "#fff",
                fontSize: normalize(15),
                fontFamily: "nunito-bold",
              }}
            >
              Entrar
            </Text>
          </ViewLogin>
        </Form>
      </Container>
    </ScrollView>
  );
};
export default HomeScreen;

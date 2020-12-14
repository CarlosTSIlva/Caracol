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

import { Form } from "@unform/mobile";
import * as Yup from "yup";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import api from "../../services/api";
import Folder from "../../components/Folder";
import Input from "../../components/Input";
import normalize from "../../utils/normalize";

const fetchFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("../fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("../fonts/Nunito-Bold.ttf"),
  });
};

const ResetPassword = ({ navigation }) => {
  const [dataLoader, setdataLoader] = useState(false);
  const [check, setCheck] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string().required().min(3, "Nome obrigatório!"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      api.post("/usuario/forgotpassword", data);
      navigation.navigate("FinishPassword");
      return;
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
            Esqueci minha senha
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
            Informe seu usuário abaixo para recuperá-la.
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
                style={{ width: normalize(37), height: normalize(32) }}
                source={require("../../../assets/usericon.png")}
              />
            </View>
          </View2>

          <Esquecisenha>
            <Image
              onPress={() => navigation.navigate("HomeScreen")}
              style={{ width: normalize(22), height: normalize(20), marginLeft: normalize(10) }}
              source={require("../../../assets/seta.png")}
            />
            <EsquecisenhaText
              onPress={() => navigation.navigate("HomeScreen")}
              style={{ fontFamily: "nunito-bold" }}
            >
              Retornar ao Login
            </EsquecisenhaText>
          </Esquecisenha>
          <ViewLogin onPress={() => formRef.current.submitForm()} title="Logar">
            <Text
              style={{
                color: "#fff",
                fontSize: normalize(15),
                fontFamily: "nunito-bold",
              }}
            >
              Recuperar
            </Text>
          </ViewLogin>          
        </Form>
      </Container>
    </ScrollView>
  );
};
export default ResetPassword;

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
        <View>
          <TextPurple
            style={{
              fontFamily: "nunito-bold",
              marginTop: normalize(30),
              marginLeft: normalize(-185),
              fontSize: normalize(14),
            }}
          >
            Esqueci minha senha
          </TextPurple>

          <TextBlack
            style={{
              fontFamily: "nunito-regular",
              fontSize: normalize(13),
              marginBottom: normalize(25),
              marginLeft: normalize(-60),
            }}
          >
            Informe seu usuário abaixo para recuperá-la.
          </TextBlack>
        </View>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <View2>
            <View>
              <Input
                style={{
                  height: normalize(50),
                  width: normalize(325),
                  marginBottom: normalize(15),
                  paddingHorizontal: normalize(12),
                  paddingVertical: normalize(13),
                  marginTop: normalize(20),
                  fontSize: normalize(15),
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
                style={{ width: normalize(37), height: normalize(32) }}
                source={require("../../../assets/usericon.png")}
              />
            </View>
          </View2>

          <Esquecisenha>
            <Image
              onPress={() => navigation.navigate("HomeScreen")}
              style={{ width: normalize(22), height: normalize(20) }}
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

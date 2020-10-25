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

import Folder from "../../components/Folder";
import Input from "../../components/Input";

const fetchFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("../fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("../fonts/Nunito-Bold.ttf"),
  });
};

export default ResetPassword = ({ navigation }) => {
  const [dataLoader, setdataLoader] = useState(false);
  const [check, setCheck] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = useCallback(async (data) => {
    console.log(data);
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string().required().min(3, "Nome obrigatório!"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      navigation.navigate("FinishReset");
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
              marginTop: 30,
              marginLeft: -185,
              fontSize: 14,
            }}
          >
            Esqueci minha senha
          </TextPurple>

          <TextBlack
            style={{
              fontFamily: "nunito-regular",
              fontSize: 13,
              marginBottom: 25,
              marginLeft: -60,
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

          <Esquecisenha>
            <Image
              onPress={() => navigation.navigate("Home")}
              style={{ width: 22, height: 20 }}
              source={require("../../../assets/seta.png")}
            />
            <EsquecisenhaText
              onPress={() => navigation.navigate("Home")}
              style={{ fontFamily: "nunito-bold" }}
            >
              Retornar ao Login
            </EsquecisenhaText>
          </Esquecisenha>

          <ViewLogin onPress={() => formRef.current.submitForm()} title="Logar">
            <Text style={{ color: "#fff", fontFamily: "nunito-bold" }}>
              Recuperar
            </Text>
          </ViewLogin>
        </Form>
      </Container>
    </ScrollView>
  );
};

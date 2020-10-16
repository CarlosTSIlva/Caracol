import React, { useState, useRef, useCallback } from "react";

import { StatusBar, View, Alert } from "react-native";
import { Container, ImageI, ViewLogin, TextPurple } from "./styles";

import { Form } from "@unform/mobile";
import * as Yup from "yup";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Input from "../../components/Input";
import api from "../../services/api";

const fetchFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("../fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("../fonts/Nunito-Bold.ttf"),
  });
};

export default ResetPassword = () => {
  const [dataLoader, setdataLoader] = useState(false);
  const [check, setCheck] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        username: Yup.string().min(3, "Nome obrigatório!"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err) {
        if (err instanceof Yup.ValidationError) {
          Alert.alert("Ocorreu um erro ", "ao mandar email de reset de senha");
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
    <>
      <StatusBar backgroundColor="black" />
      <Container>
        <ImageI
          source={{
            uri: "https://image.flaticon.com/icons/png/512/604/604241.png",
          }}
        />
        <View>
          <TextPurple style={{ fontFamily: "nunito-bold" }}>
            Bem-vindo ao Caracol!
          </TextPurple>
        </View>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="username"
            type="username"
            placeholder="Username"
            autoCorrect={false}
            autoCapitalize="none"
          />

          <ViewLogin
            onPress={() => formRef.current.submitForm()}
            title="Reset password"
            color="#9400d3"
          />
        </Form>
      </Container>
    </>
  );
};

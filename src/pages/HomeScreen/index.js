import React, { useState, useRef } from "react";

import { StatusBar, View, Alert } from "react-native";
import {
  Container,
  ImageI,
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

import Input from "../../components/Input";
import CheckBox from "../../components/checkBox";

const fetchFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("../fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("../fonts/Nunito-Bold.ttf"),
  });
};

const HomeScreen = () => {
  const [dataLoader, setdataLoader] = useState(false);
  const [check, setCheck] = useState(false);
  const formRef = useRef(null);

  const [visible, setVisibility] = React.useState(false);

  const icon = !visible ? "eye-slash" : "eye";

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        username: yup.string().required(),
        password: Yup.string().min(6).required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      console.log(data);
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

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

          <TextBlack style={{ fontFamily: "nunito-regular", fontSize: 16 }}>
            A sua casa onde você estiver.
          </TextBlack>
        </View>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="username"
            type="username"
            placeholder="E-mail"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
          />

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
                size={18}
                style={{
                  padding: 3,
                  textAlign: "center",
                  textAlignVertical: "center",
                }}
              />
            </View>
          </View2>

          <Esquecisenha>
            <EsquecisenhaText style={{ fontFamily: "nunito-regular" }}>
              Esqueci a senha
            </EsquecisenhaText>
          </Esquecisenha>

          <CheckBox
            label="Mantenha-me conectado"
            labelStyle={{ color: "#ffff", fontSize: 15 }}
            iconColor="#ffff"
            checkColor="#ffff"
            value={check}
            onChange={handleCheck}
          />
          <ViewLogin
            onPress={() => formRef.current.submitForm()}
            title="Logar"
            color="#9400d3"
          />
        </Form>
      </Container>
    </>
  );
};

export default HomeScreen;

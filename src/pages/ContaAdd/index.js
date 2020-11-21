import React, { useRef, useState } from "react";
import { Text, Image, View, ScrollView } from "react-native";
import { Form } from "@unform/mobile";
import Input from "../../components/Input";
import { Picker } from "@react-native-picker/picker";
import { Container, Header, View2, ViewLogin } from "./styles";
import normalize from "../../utils/normalize";
import { useTheme } from "../../components/Theme/ThemeProvider";

import { AppLoading } from "expo";
import * as Font from "expo-font";
const fetchFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("../fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("../fonts/Nunito-Bold.ttf"),
  });
};

const ContaAdd = ({ navigation }) => {
  const formRef = useRef(null);
  const { colors } = useTheme();

  const [dataLoader, setdataLoader] = useState(false);

  if (!dataLoader) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setdataLoader(true)}
      />
    );
  }

  return (
    <Container style={{ backgroundColor: colors.background }}>
      <ScrollView>
        <Header
          style={{ backgroundColor: colors.backgroundHeader }}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{
              width: normalize(31),
              height: normalize(36),
              marginRight: normalize(120),
            }}
            source={require("../../../assets/back.png")}
          />
          <Text
            style={{
              fontSize: normalize(18),
              color: "#6F2DA8",
              fontFamily: "nunito-regular",
            }}
          >
            Adicionar Conta
          </Text>
        </Header>
        <Form ref={formRef}>
          <View style={{ marginTop: normalize(25) }}>
            <Text
              style={{
                marginLeft: normalize(42),
                color: colors.text,
                fontFamily: "nunito-regular",
              }}
            >
              Nome
            </Text>
            <View2>
              <View>
                <Input
                  style={{
                    height: normalize(50),
                    width: normalize(340),
                    marginBottom: normalize(15),
                    paddingHorizontal: normalize(12),
                    marginTop: normalize(20),
                    marginLeft: normalize(-10),
                    fontSize: normalize(15),
                  }}
                  name="username"
                  type="username"
                  placeholder="Nome"
                  autoCorrect={false}
                  autoCapitalize="none"
                />
              </View>
            </View2>
          </View>

          <View style={{ marginTop: normalize(25) }}>
            <Text
              style={{
                marginLeft: normalize(42),
                color: colors.text,
                fontFamily: "nunito-regular",
              }}
            >
              E-mail
            </Text>
            <View2>
              <View>
                <Input
                  style={{
                    height: normalize(50),
                    width: normalize(340),
                    marginBottom: normalize(15),
                    paddingHorizontal: normalize(12),
                    marginTop: normalize(20),
                    marginLeft: normalize(-10),
                    fontSize: normalize(15),
                  }}
                  name="username"
                  type="username"
                  placeholder="E-mail"
                  autoCorrect={false}
                  autoCapitalize="none"
                />
              </View>
            </View2>
          </View>

          <View style={{ marginTop: normalize(25) }}>
            <Text
              style={{
                marginLeft: normalize(42),
                color: colors.text,
                fontFamily: "nunito-regular",
              }}
            >
              Celular
            </Text>
            <View2>
              <View>
                <Input
                  style={{
                    height: normalize(50),
                    width: normalize(340),
                    marginBottom: normalize(15),
                    paddingHorizontal: normalize(12),
                    marginTop: normalize(20),
                    marginLeft: normalize(-10),
                    fontSize: normalize(15),
                  }}
                  name="username"
                  type="username"
                  placeholder="Celular"
                  autoCorrect={false}
                  autoCapitalize="none"
                />
              </View>
            </View2>
          </View>

          <View style={{ marginTop: normalize(25) }}>
            <Text
              style={{
                marginLeft: normalize(42),
                color: colors.text,
                fontFamily: "nunito-regular",
              }}
            >
              Documento de identificação
            </Text>
            <View2>
              <View>
                <Input
                  style={{
                    height: normalize(50),
                    width: normalize(340),
                    marginBottom: normalize(15),
                    paddingHorizontal: normalize(12),
                    marginTop: normalize(20),
                    marginLeft: normalize(-10),
                    fontSize: normalize(15),
                  }}
                  name="username"
                  type="username"
                  placeholder="Documento de identificação"
                  autoCorrect={false}
                  autoCapitalize="none"
                />
              </View>
            </View2>
          </View>

          <View style={{ marginTop: normalize(25) }}>
            <Text
              style={{
                marginLeft: normalize(42),
                color: colors.text,
                fontFamily: "nunito-regular",
              }}
            >
              Gênero
            </Text>
            <View2>
              <Picker
                mode="dropdown"
                style={{ height: normalize(50), width: normalize(320) }}
              >
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
              </Picker>
            </View2>
          </View>

          <View style={{ marginTop: normalize(25) }}>
            <Text
              style={{
                marginLeft: normalize(42),
                color: colors.text,
                fontFamily: "nunito-regular",
              }}
            >
              Perfil
            </Text>
            <View2>
              <Picker
                mode="dropdown"
                style={{ height: normalize(50), width: normalize(320) }}
              >
                <Picker.Item
                  label="Morador com Permissão"
                  value="Morador com Permissão"
                />
                <Picker.Item
                  label="Morador sem Permissão"
                  value="Morador sem Permissão"
                />
              </Picker>
            </View2>
          </View>

          <View style={{ marginTop: normalize(25) }}>
            <Text
              style={{
                marginLeft: normalize(42),
                color: colors.text,
                fontFamily: "nunito-regular",
              }}
            >
              Usuário
            </Text>
            <View2>
              <View>
                <Input
                  style={{
                    height: normalize(50),
                    width: normalize(340),
                    marginBottom: normalize(15),
                    paddingHorizontal: normalize(12),
                    marginTop: normalize(20),
                    marginLeft: normalize(-10),
                    fontSize: normalize(15),
                  }}
                  name="username"
                  type="username"
                  placeholder="Usuário"
                  autoCorrect={false}
                  autoCapitalize="none"
                />
              </View>
            </View2>
          </View>

          <View style={{ marginTop: normalize(25) }}>
            <Text
              style={{
                marginLeft: normalize(42),
                color: colors.text,
                fontFamily: "nunito-regular",
              }}
            >
              Senha
            </Text>
            <View2>
              <View>
                <Input
                  style={{
                    height: normalize(50),
                    width: normalize(340),
                    marginBottom: normalize(15),
                    paddingHorizontal: normalize(12),
                    marginTop: normalize(20),
                    marginLeft: normalize(-10),
                    fontSize: normalize(15),
                  }}
                  name="username"
                  type="username"
                  placeholder="Senha"
                  autoCorrect={false}
                  autoCapitalize="none"
                />
              </View>
            </View2>
          </View>

          <View style={{ marginTop: normalize(25) }}>
            <Text
              style={{
                marginLeft: normalize(42),
                color: colors.text,
                fontFamily: "nunito-regular",
              }}
            >
              Confirmação de Senha
            </Text>
            <View2>
              <View>
                <Input
                  style={{
                    height: normalize(50),
                    width: normalize(340),
                    marginBottom: normalize(15),
                    paddingHorizontal: normalize(12),
                    marginTop: normalize(20),
                    marginLeft: normalize(-10),
                    fontSize: normalize(15),
                  }}
                  name="username"
                  type="username"
                  placeholder="Confirmação de Senha"
                  autoCorrect={false}
                  autoCapitalize="none"
                />
              </View>
            </View2>
          </View>

          <ViewLogin onPress={() => {}} title="Logar">
            <Text
              style={{
                color: colors.text,
                fontFamily: "nunito-regular",
                fontSize: normalize(15),
              }}
            >
              Salvar
            </Text>
          </ViewLogin>
        </Form>
      </ScrollView>
    </Container>
  );
};

export default ContaAdd;

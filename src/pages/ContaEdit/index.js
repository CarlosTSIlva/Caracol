import React, { useRef } from "react";
import { Text, Image, View, ScrollView } from "react-native";
import { Form } from "@unform/mobile";
import Input from "../../components/Input";
import { Picker } from "@react-native-picker/picker";
import { Container, Header, View2, ViewLogin } from "./styles";

const ContaEdit = () => {
  const formRef = useRef(null);

  return (
    <Container>
      <ScrollView>
        <Header>
          <Image
            style={{ width: 31, height: 36, marginRight: 98 }}
            source={require("../../../assets/back.png")}
          />
          <Text style={{ fontSize: 18, color: "#6F2DA8" }}>Editar Conta</Text>
        </Header>
        <Form ref={formRef}>
          <View style={{ marginTop: 25 }}>
            <Text style={{ marginLeft: 20 }}>Nome</Text>
            <View2>
              <View>
                <Input
                  style={{
                    height: 50,
                    width: 340,
                    marginBottom: 15,
                    paddingHorizontal: 12,
                    marginTop: 20,
                    marginLeft: -15,
                    fontSize: 15,
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

          <View style={{ marginTop: 25 }}>
            <Text style={{ marginLeft: 20 }}>E-mail</Text>
            <View2>
              <View>
                <Input
                  style={{
                    height: 50,
                    width: 340,
                    marginBottom: 15,
                    paddingHorizontal: 12,
                    marginTop: 20,
                    marginLeft: -15,
                    fontSize: 15,
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

          <View style={{ marginTop: 25 }}>
            <Text style={{ marginLeft: 20 }}>Celular</Text>
            <View2>
              <View>
                <Input
                  style={{
                    height: 50,
                    width: 340,
                    marginBottom: 15,
                    paddingHorizontal: 12,
                    marginTop: 20,
                    marginLeft: -15,
                    fontSize: 15,
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

          <View style={{ marginTop: 25 }}>
            <Text style={{ marginLeft: 20 }}>Documento de identificação</Text>
            <View2>
              <View>
                <Input
                  style={{
                    height: 50,
                    width: 340,
                    marginBottom: 15,
                    paddingHorizontal: 12,
                    marginTop: 20,
                    marginLeft: -15,
                    fontSize: 15,
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

          <View style={{ marginTop: 25 }}>
            <Text style={{ marginLeft: 20 }}>Gênero</Text>
            <View2>
              <Picker mode="dropdown" style={{ height: 50, width: 320 }}>
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
              </Picker>
            </View2>
          </View>

          <View style={{ marginTop: 25 }}>
            <Text style={{ marginLeft: 20 }}>Perfil</Text>
            <View2>
              <Picker mode="dropdown" style={{ height: 50, width: 320 }}>
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

          <View style={{ marginTop: 25 }}>
            <Text style={{ marginLeft: 20 }}>Usuário</Text>
            <View2>
              <View>
                <Input
                  style={{
                    height: 50,
                    width: 340,
                    marginBottom: 15,
                    paddingHorizontal: 12,
                    marginTop: 20,
                    marginLeft: -15,
                    fontSize: 15,
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

          <View style={{ marginTop: 25 }}>
            <Text style={{ marginLeft: 20 }}>Senha</Text>
            <View2>
              <View>
                <Input
                  style={{
                    height: 50,
                    width: 340,
                    marginBottom: 15,
                    paddingHorizontal: 12,
                    marginTop: 20,
                    marginLeft: -15,
                    fontSize: 15,
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

          <View style={{ marginTop: 25 }}>
            <Text style={{ marginLeft: 20 }}>Confirmação de Senha</Text>
            <View2>
              <View>
                <Input
                  style={{
                    height: 50,
                    width: 340,
                    marginBottom: 15,
                    paddingHorizontal: 12,
                    marginTop: 20,
                    marginLeft: -15,
                    fontSize: 15,
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
                color: "#fff",
                fontSize: 15,
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

export default ContaEdit;

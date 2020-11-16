import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import {
  Settings,
  ViewName,
  Container,
  Quadro,
  Dados,
  Navegaçao,
  Menu,
  Config,
} from "./styles";

const Dashboard = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Container>
          <Settings>
            <Image
              style={{ width: 98, height: 102 }}
              source={require("../../../assets/Perfil.png")}
            />
            <View>
              <ViewName>
                <Text style={{ fontSize: 18, color: "#6f2da8" }}>
                  Olá, Carlos
                </Text>
                <Config onPress={() => navigation.navigate("Config")}>
                  <Image
                    style={{ width: 28, height: 28 }}
                    source={require("../../../assets/config.png")}
                  />
                </Config>
              </ViewName>
              <View style={{ marginLeft: 8 }}>
                <Text>
                  Bloco: <Text>A</Text>
                </Text>
                <Text>
                  Apartamento: <Text>123</Text>
                </Text>
              </View>
            </View>
          </Settings>
          <Quadro>
            <Text>Encomendas</Text>
            <Dados>
              <Image
                style={{ width: 40, height: 40, marginRight: 14 }}
                source={require("../../../assets/Encomenda.png")}
              />
              <View>
                <Text>Encomenda Frágio</Text>
                <Text style={{ marginLeft: 2 }}>01/01/2020</Text>
              </View>
            </Dados>
            <Dados>
              <Image
                style={{ width: 40, height: 40, marginRight: 14 }}
                source={require("../../../assets/Encomenda.png")}
              />
              <View>
                <Text>Encomenda Correio</Text>
                <Text style={{ marginLeft: 2 }}>01/01/2020</Text>
              </View>
            </Dados>
          </Quadro>
          <Quadro>
            <Text>Próximas Reservas</Text>
            <Dados>
              <Image
                style={{ width: 40, height: 40, marginRight: 14 }}
                source={require("../../../assets/Encomenda.png")}
              />
              <View>
                <Text>Quadra de Tênis</Text>
                <Text style={{ marginLeft: 2 }}>01/01/2020</Text>
              </View>
            </Dados>
            <Dados>
              <Image
                style={{ width: 40, height: 40, marginRight: 14 }}
                source={require("../../../assets/Encomenda.png")}
              />
              <View>
                <Text>Churrasqueira</Text>
                <Text style={{ marginLeft: 2 }}>01/01/2020</Text>
              </View>
            </Dados>
          </Quadro>
        </Container>
      </ScrollView>
      <Navegaçao>
        <Menu>
          <Image
            style={{ width: 20, height: 22, marginBottom: 17 }}
            source={require("../../../assets/home.png")}
          />
          <Text style={{ color: "#ffff", fontSize: 12 }}>Home</Text>
        </Menu>
        <Menu>
          <Image
            style={{ width: 20, height: 22, marginBottom: 2 }}
            source={require("../../../assets/money.png")}
          />
          <Text style={{ color: "#ffff", fontSize: 12 }}>
            Produtos & Serviços
          </Text>
        </Menu>
      </Navegaçao>
    </View>
  );
};

export default Dashboard;

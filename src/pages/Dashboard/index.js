import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import {
  Settings,
  ViewName,
  Container,
  Quadro,
  Dados,
  Navegaçao,
} from "./styles";
const Dashboard = () => {
  return (
    <Container>
      <ScrollView>
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
              <View>
                <Image
                  style={{ width: 28, height: 28, marginLeft: 130 }}
                  source={require("../../../assets/config.png")}
                />
              </View>
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
      </ScrollView>
      <Navegaçao>
        <Image
          style={{ width: 40, height: 40, marginRight: 14 }}
          source={require("../../../assets/Encomenda.png")}
        />
      </Navegaçao>
    </Container>
  );
};

export default Dashboard;

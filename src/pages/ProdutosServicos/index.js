import React, { useState, useRef } from "react";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { Form } from "@unform/mobile";

import { Navegaçao, Menu, Container, View2, Borda } from "./styles";

import normalize from "../../utils/normalize";
import { useTheme } from "../../components/Theme/ThemeProvider";
import { AppLoading } from "expo";
import Input from "../../components/Input";

import * as Font from "expo-font";
const fetchFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("../fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("../fonts/Nunito-Bold.ttf"),
  });
};

const ProdutosServicos = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const { colors } = useTheme();
  const formRef = useRef(null);

  if (!loading) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setLoading(true)} />
    );
  }

  return (
    <View
      style={{
        backgroundColor: colors.background,
        paddingTop: normalize(10),
        paddingBottom: normalize(90),
      }}
    >
      <ScrollView style={{ backgroundColor: colors.background }}>
        <Container style={{ backgroundColor: colors.background }}>
          <Text
            style={{
              fontSize: normalize(18),
              fontFamily: "nunito-bold",
            }}
          >
            Produtos & Serviços
          </Text>
          <Form ref={formRef}>
            <View2 style={{ marginBottom: normalize(35) }}>
              <View>
                <Input
                  style={{
                    height: normalize(54),
                    width: normalize(350),
                    marginBottom: normalize(15),
                    paddingHorizontal: normalize(12),
                    paddingVertical: normalize(16),
                    marginTop: normalize(20),
                    marginLeft: normalize(-15),
                    fontSize: normalize(15),
                  }}
                  name="Pesquisar"
                  type="pesquisar"
                  placeholder="Pesquisar"
                  autoCorrect={false}
                  autoCapitalize="none"
                />
              </View>
              <View>
                <Image
                  style={{
                    width: normalize(40),
                    height: normalize(40),
                  }}
                  source={require("../../../assets/busca.png")}
                />
              </View>
            </View2>
          </Form>

          <View>
            <ScrollView style={{ marginLeft: 5 }} horizontal={true}>
              <View style={{ alignItems: "center", padding: normalize(6) }}>
                <Image
                  style={{
                    width: normalize(92),
                    height: normalize(64),
                    borderRadius: normalize(10),
                  }}
                  source={require("../../../assets/Jardinagem.png")}
                />
                <Text
                  style={{
                    fontSize: normalize(12),
                    fontFamily: "nunito-regular",
                    color: colors.text,
                  }}
                >
                  Jardinagem
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Filtros")}
                style={{ alignItems: "center", padding: normalize(5) }}
              >
                <Image
                  style={{
                    width: normalize(92),
                    height: normalize(64),
                    borderRadius: normalize(10),
                  }}
                  source={require("../../../assets/Piscina.png")}
                />
                <Text
                  style={{
                    color: colors.text,
                    fontSize: normalize(12),
                    fontFamily: "nunito-regular",
                  }}
                >
                  Piscina
                </Text>
              </TouchableOpacity>
              <View style={{ alignItems: "center", padding: normalize(5) }}>
                <Image
                  style={{
                    width: normalize(92),
                    height: normalize(64),
                    borderRadius: normalize(10),
                  }}
                  source={require("../../../assets/Feira.png")}
                />
                <Text
                  style={{
                    fontSize: normalize(12),
                    fontFamily: "nunito-regular",
                    color: colors.text,
                  }}
                >
                  Feira Livre
                </Text>
              </View>
              <View style={{ alignItems: "center", padding: normalize(5) }}>
                <Image
                  style={{
                    width: normalize(92),
                    height: normalize(64),
                    borderRadius: normalize(10),
                  }}
                  source={require("../../../assets/Profissionais.png")}
                />
                <Text
                  style={{
                    fontSize: normalize(12),
                    fontFamily: "nunito-regular",
                    color: colors.text,
                  }}
                >
                  Profissionais
                </Text>
              </View>
              <View style={{ alignItems: "center", padding: normalize(5) }}>
                <Image
                  style={{
                    width: normalize(92),
                    height: normalize(64),
                    borderRadius: normalize(10),
                  }}
                  source={require("../../../assets/Profissionais.png")}
                />
                <Text
                  style={{
                    fontSize: normalize(12),
                    fontFamily: "nunito-regular",
                    color: colors.text,
                  }}
                >
                  Profissionais
                </Text>
              </View>
            </ScrollView>
          </View>
        </Container>
        <View>
          <Text
            style={{
              fontSize: normalize(18),
              marginLeft: normalize(10),
              fontFamily: "nunito-bold",
              color: colors.text,
            }}
          >
            Últimas solicitações
          </Text>
          <ScrollView style={{ marginLeft: normalize(5) }} horizontal={true}>
            <Borda>
              <Image
                style={{
                  width: normalize(40),
                  height: normalize(40),
                  borderRadius: normalize(50),
                  marginRight: normalize(12),
                }}
                source={require("../../../assets/Limpesa.png")}
              />
              <Text
                style={{ fontFamily: "nunito-bold", fontSize: normalize(14) }}
              >
                Clean Limpezas
              </Text>
            </Borda>
            <Borda>
              <Image
                style={{
                  width: normalize(40),
                  height: normalize(40),
                  borderRadius: normalize(50),
                  marginRight: normalize(12),
                }}
                source={require("../../../assets/Limpesa.png")}
              />
              <Text
                style={{ fontFamily: "nunito-bold", fontSize: normalize(14) }}
              >
                Clean Limpezas
              </Text>
            </Borda>
            <Borda>
              <Image
                style={{
                  width: normalize(40),
                  height: normalize(40),
                  borderRadius: normalize(50),
                  marginRight: normalize(12),
                }}
                source={require("../../../assets/Limpesa.png")}
              />
              <Text
                style={{ fontFamily: "nunito-bold", fontSize: normalize(14) }}
              >
                Clean Limpezas
              </Text>
            </Borda>
          </ScrollView>
        </View>
        <View>
          <Text
            style={{
              fontSize: normalize(18),
              marginLeft: normalize(10),
              color: colors.text,

              fontFamily: "nunito-bold",
            }}
          >
            Últimas solicitações
          </Text>
          <ScrollView horizontal={true} style={{ marginLeft: normalize(5) }}>
            <Borda>
              <Image
                style={{
                  width: normalize(40),
                  height: normalize(40),
                  borderRadius: normalize(50),
                  marginRight: normalize(12),
                }}
                source={require("../../../assets/Limpesa.png")}
              />
              <Text
                style={{ fontFamily: "nunito-bold", fontSize: normalize(14) }}
              >
                Meat Carnes
              </Text>
            </Borda>
            <Borda>
              <Image
                style={{
                  width: normalize(40),
                  height: normalize(40),
                  borderRadius: normalize(50),
                  marginRight: normalize(12),
                }}
                source={require("../../../assets/Limpesa.png")}
              />
              <Text
                style={{ fontFamily: "nunito-bold", fontSize: normalize(14) }}
              >
                Meat Carnes
              </Text>
            </Borda>
            <Borda>
              <Image
                style={{
                  width: normalize(40),
                  height: normalize(40),
                  borderRadius: normalize(50),
                  marginRight: normalize(12),
                }}
                source={require("../../../assets/Limpesa.png")}
              />
              <Text
                style={{ fontFamily: "nunito-bold", fontSize: normalize(14) }}
              >
                Clean Limpezas
              </Text>
            </Borda>
          </ScrollView>
        </View>
        <View>
          <Text
            style={{
              color: colors.text,

              fontSize: normalize(18),
              fontFamily: "nunito-bold",
              marginLeft: normalize(10),
            }}
          >
            Produtos e Serviços
          </Text>
          <ScrollView style={{ maxHeight: normalize(215) }}>
            <View2>
              <Image
                style={{
                  width: normalize(40),
                  height: normalize(40),
                  borderRadius: normalize(50),
                  marginRight: normalize(12),
                }}
                source={require("../../../assets/Limpesa.png")}
              />
              <View>
                <Text
                  style={{
                    fontFamily: "nunito-bold",
                    fontSize: normalize(14),
                    color: "#6F2DA8",
                  }}
                >
                  Nado Livre Piscinas
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: normalize(18), height: normalize(18) }}
                    source={require("../../../assets/Estrela.png")}
                  />
                  <Text
                    style={{
                      fontFamily: "nunito-bold",
                      fontSize: normalize(14),
                      padding: normalize(2),
                    }}
                  >
                    4,5
                  </Text>
                  <Image
                    style={{
                      width: normalize(5),
                      height: normalize(5),
                      marginLeft: normalize(6),
                    }}
                    source={require("../../../assets/dot.png")}
                  />
                  <Text
                    style={{
                      fontFamily: "nunito-bold",
                      fontSize: normalize(14),
                      padding: normalize(2),
                      marginLeft: normalize(3),
                    }}
                  >
                    Piscinas
                  </Text>
                  <Image
                    style={{
                      width: normalize(5),
                      height: normalize(5),
                      marginLeft: normalize(45),
                    }}
                    source={require("../../../assets/dot.png")}
                  />
                  <Text
                    style={{
                      fontFamily: "nunito-bold",
                      fontSize: normalize(14),
                      padding: normalize(2),
                      marginLeft: normalize(3),
                    }}
                  >
                    1,0 Km
                  </Text>
                </View>
              </View>
            </View2>
            <View2>
              <Image
                style={{
                  width: normalize(40),
                  height: normalize(40),
                  borderRadius: normalize(50),
                  marginRight: normalize(12),
                }}
                source={require("../../../assets/Limpesa.png")}
              />
              <View>
                <Text
                  style={{
                    fontFamily: "nunito-bold",
                    fontSize: normalize(14),
                    color: "#6F2DA8",
                  }}
                >
                  Nado Livre Piscinas
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: normalize(18), height: normalize(18) }}
                    source={require("../../../assets/Estrela.png")}
                  />
                  <Text
                    style={{
                      fontFamily: "nunito-bold",
                      fontSize: normalize(14),
                      padding: normalize(2),
                    }}
                  >
                    4,5
                  </Text>
                  <Image
                    style={{
                      width: normalize(5),
                      height: normalize(5),
                      marginLeft: 6,
                    }}
                    source={require("../../../assets/dot.png")}
                  />
                  <Text
                    style={{
                      fontFamily: "nunito-bold",
                      fontSize: normalize(14),
                      padding: normalize(2),
                      marginLeft: normalize(3),
                    }}
                  >
                    Piscinas
                  </Text>
                  <Image
                    style={{
                      width: normalize(5),
                      height: normalize(5),
                      marginLeft: normalize(45),
                    }}
                    source={require("../../../assets/dot.png")}
                  />
                  <Text
                    style={{
                      fontFamily: "nunito-bold",
                      fontSize: normalize(14),
                      padding: normalize(2),
                      marginLeft: normalize(3),
                    }}
                  >
                    1,0 Km
                  </Text>
                </View>
              </View>
            </View2>
            <View2>
              <Image
                style={{
                  width: normalize(40),
                  height: normalize(40),
                  borderRadius: normalize(50),
                  marginRight: normalize(12),
                }}
                source={require("../../../assets/Limpesa.png")}
              />
              <View>
                <Text
                  style={{
                    fontFamily: "nunito-bold",
                    fontSize: normalize(14),
                    color: "#6F2DA8",
                  }}
                >
                  Nado Livre Piscinas
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: normalize(18), height: normalize(18) }}
                    source={require("../../../assets/Estrela.png")}
                  />
                  <Text
                    style={{
                      fontFamily: "nunito-bold",
                      fontSize: normalize(14),
                      padding: normalize(2),
                    }}
                  >
                    4,5
                  </Text>
                  <Image
                    style={{
                      width: normalize(5),
                      height: normalize(5),
                      marginLeft: normalize(6),
                    }}
                    source={require("../../../assets/dot.png")}
                  />
                  <Text
                    style={{
                      fontFamily: "nunito-bold",
                      fontSize: normalize(14),
                      padding: normalize(2),
                      marginLeft: normalize(3),
                    }}
                  >
                    Piscinas
                  </Text>
                  <Image
                    style={{
                      width: normalize(5),
                      height: normalize(5),
                      marginLeft: normalize(45),
                    }}
                    source={require("../../../assets/dot.png")}
                  />
                  <Text
                    style={{
                      fontFamily: "nunito-bold",
                      fontSize: normalize(14),
                      padding: normalize(2),
                      marginLeft: normalize(3),
                    }}
                  >
                    1,0 Km
                  </Text>
                </View>
              </View>
            </View2>
            <View2>
              <Image
                style={{
                  width: normalize(40),
                  height: normalize(40),
                  borderRadius: normalize(50),
                  marginRight: normalize(12),
                }}
                source={require("../../../assets/Limpesa.png")}
              />
              <View>
                <Text
                  style={{
                    fontFamily: "nunito-bold",
                    fontSize: normalize(14),
                    color: "#6F2DA8",
                  }}
                >
                  Nado Livre Piscinas
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: normalize(18), height: normalize(18) }}
                    source={require("../../../assets/Estrela.png")}
                  />
                  <Text
                    style={{
                      fontFamily: "nunito-bold",
                      fontSize: normalize(14),
                      padding: normalize(2),
                    }}
                  >
                    4,5
                  </Text>
                  <Image
                    style={{
                      width: normalize(5),
                      height: normalize(5),
                      marginLeft: normalize(6),
                    }}
                    source={require("../../../assets/dot.png")}
                  />
                  <Text
                    style={{
                      fontFamily: "nunito-bold",
                      fontSize: normalize(14),
                      padding: normalize(2),
                      marginLeft: normalize(3),
                    }}
                  >
                    Piscinas
                  </Text>
                  <Image
                    style={{
                      width: normalize(5),
                      height: normalize(5),
                      marginLeft: normalize(45),
                    }}
                    source={require("../../../assets/dot.png")}
                  />
                  <Text
                    style={{
                      fontFamily: "nunito-bold",
                      fontSize: normalize(14),
                      padding: normalize(2),
                      marginLeft: normalize(3),
                    }}
                  >
                    1,0 Km
                  </Text>
                </View>
              </View>
            </View2>
          </ScrollView>
        </View>
      </ScrollView>
      <Navegaçao style={{ backgroundColor: colors.background }}>
        <Menu onPress={() => navigation.navigate("Dashboard")}>
          <Image
            style={{
              width: normalize(20),
              height: normalize(22),
              marginBottom: normalize(17),
            }}
            source={require("../../../assets/home.png")}
          />
          <Text
            style={{
              color: "#ffff",
              fontSize: normalize(14),
              fontFamily: "nunito-regular",
            }}
          >
            Home
          </Text>
        </Menu>
        <Menu>
          <Image
            style={{
              width: normalize(20),
              height: normalize(22),
              marginBottom: normalize(2),
            }}
            source={require("../../../assets/money.png")}
          />
          <Text
            style={{
              color: "#ffff",
              fontSize: normalize(14),
              fontFamily: "nunito-regular",
            }}
          >
            Produtos & Serviços
          </Text>
        </Menu>
      </Navegaçao>
    </View>
  );
};

export default ProdutosServicos;

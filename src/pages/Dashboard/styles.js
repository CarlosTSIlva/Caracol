import styled from "styled-components/native";
import normalize from "../../utils/normalize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #ffffff;
`;

export const Settings = styled.View`
  background-color: #f2f2f2;
  flex-direction: row;
  width: ${normalize(394)}px;
  margin: ${normalize(12)}px ${normalize(10)}px;
  border-radius: ${normalize(5)}px;
  margin-bottom: ${normalize(58)}%;
`;

export const ViewName = styled.View`
  flex-direction: row;
  margin-left: ${normalize(5)}px;
`;

export const Quadro = styled.View`
  width: ${normalize(394)}px;
`;

export const Dados = styled.View`
  flex-direction: row;
  padding: ${normalize(10)}px;
  margin-top: ${normalize(7)}px;
  border-color: #f2f2f2;
  border-width: ${normalize(1)}px;
  border-radius: ${normalize(5)}px;
`;

export const Navegaçao = styled.View`
  flex-direction: row;
  padding: ${normalize(12)}px ${normalize(10)}px;
  border-radius: ${normalize(5)}px;
  margin-top: ${normalize(1)}px;
`;

export const Menu = styled.View`
  background-color: #6f2da8;
  width: ${normalize(82)}px;
  height: ${normalize(68)}px;

  margin-right: ${normalize(6)}px;
  padding: ${normalize(5)}px;
  border-radius: ${normalize(5)}px;
`;

export const Config = styled.TouchableOpacity`
  background-color: #ffffff;
  height: ${normalize(34)}px;
  width: ${normalize(34)}px;
  border-radius: ${normalize(50)}px;
  margin-left: ${normalize(103)}px;
  margin-right: ${normalize(10)}px;
  padding: ${normalize(3)}px;
`;

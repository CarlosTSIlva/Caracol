import styled from "styled-components/native";
import normalize from "../../utils/normalize";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.TouchableOpacity`
  height: ${normalize(108)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Menu = styled.TouchableOpacity`
  width: ${normalize(100)}%;
  margin-top: ${normalize(15)}px;
  flex-direction: row;
  padding: ${normalize(8)}px;
  border-radius: ${normalize(5)}px;
`;

export const Info = styled.TouchableOpacity`
  padding: ${normalize(8)}px;
  margin-top: ${normalize(15)}px;
  flex-direction: row;
  border-radius: ${normalize(5)}px;
`;

export const Modos = styled.View`
  flex-direction: row;
  padding: ${normalize(10)}px;
  justify-content: space-between;
`;

export const Estilo = styled.View`
  width: ${normalize(54)}px;
  height: ${normalize(33)}px;
  border-radius: ${normalize(15)}px;
  padding: ${normalize(2)}px;
  margin-top: ${normalize(-5)}px;
  border: ${normalize(1)}px;
  border-color: #dde3f0;
  display: flex;
`;

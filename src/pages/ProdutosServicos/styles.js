import styled from "styled-components/native";
import normalize from "../../utils/normalize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #ffffff;
`;

export const View2 = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  height: ${normalize(55)}px;
  width: ${normalize(400)}px;
  padding: ${normalize(7)}px;
  border-radius: ${normalize(5)}px;
  border-width: ${normalize(1)}px;
  border-color: #d3e2e5;
  margin: ${normalize(10)}px;
  margin-bottom: ${normalize(8)}px;
`;

export const Borda = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
  justify-content: center;
  height: ${normalize(55)}px;
  width: ${normalize(200)}px;
  border-radius: ${normalize(5)}px;
  border-width: ${normalize(1)}px;
  border-color: #d3e2e5;
  margin: ${normalize(5)}px;
  margin-bottom: ${normalize(55)}px;
`;

export const Navegaçao = styled.View`
  flex-direction: row;
  padding: ${normalize(12)}px ${normalize(10)}px;
  border-radius: ${normalize(5)}px;
  margin-top: ${normalize(1)}px;
`;

export const Menu = styled.TouchableOpacity`
  background-color: #6f2da8;
  width: ${normalize(82)}px;
  height: ${normalize(68)}px;

  margin-right: ${normalize(6)}px;
  padding: ${normalize(5)}px;
  border-radius: ${normalize(5)}px;
`;

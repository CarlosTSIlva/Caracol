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
  background-color: #f2f2f2;
`;

export const Menu = styled.TouchableOpacity`
  margin-top: ${normalize(15)}px;
  flex-direction: row;
  padding: ${normalize(5)}px;
  border-radius: ${normalize(5)}px;
  border: ${normalize(1)}px;
  border-color: #ffff;
`;

export const ViewLogin = styled.TouchableOpacity`
  height: ${normalize(56)}px;
  margin-left: ${normalize(12)}%;
  width: ${normalize(327)}px;
  margin-bottom: ${normalize(20)}px;
  border-radius: ${normalize(5)}px;
  background-color: #6f2da8;
  justify-content: center;
  align-items: center;
`;

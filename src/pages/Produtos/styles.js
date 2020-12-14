import styled from "styled-components/native";

import normalize from "../../utils/normalize";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.TouchableOpacity`
  height: ${normalize(108)}px;
  background-color: #f2f2f2;
  flex-direction: column;
  align-items: center;
`;

export const ViewLogin = styled.TouchableOpacity`
  height: ${normalize(56)}px;
  margin-left: ${normalize(8)}%;
  margin-right: ${normalize(8)}%;
  width: ${normalize(100)}%;
  margin-bottom: ${normalize(20)}px;
  border-radius: ${normalize(5)}px;
  background-color: #3cdc8c;
  justify-content: center;
  flex-direction: row;
  align-items: center;
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

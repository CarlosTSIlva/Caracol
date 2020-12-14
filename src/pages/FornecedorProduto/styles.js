import styled from "styled-components/native";

import normalize from "../../utils/normalize";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.TouchableOpacity`
  height: ${normalize(108)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
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

import styled from "styled-components/native";
import normalize from "../../utils/normalize";
export const Container = styled.View`
  height: ${normalize(50)}px;
  width: ${normalize(300)}px;
  background: #6f2da8;
  border-radius: ${normalize(4)}px;
  margin-top: ${normalize(8)}px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: ${normalize(18)}px;
`;

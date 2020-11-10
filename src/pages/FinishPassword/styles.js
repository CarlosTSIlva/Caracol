import styled from "styled-components/native";
import normalize from "../../utils/normalize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

export const ImageI = styled.Image`
  height: ${normalize(150)}px;
  width: ${normalize(150)}px;
  margin-top: ${normalize(-10)}px;
  margin-bottom: ${normalize(10)}px;
`;

export const Esquecisenha = styled.Text`
  margin-left: ${normalize(230)}px;
  margin-top: ${normalize(-20)}px;
`;

export const EsquecisenhaText = styled.Text`
  color: white;
  font-size: ${normalize(13)}px;
  color: black;
`;

export const TextBlack = styled.Text`
  color: black;
  text-align: center;
`;
export const TextPurple = styled.Text`
  color: black;
  text-align: center;
  font-size: ${normalize(14)}px;
`;

export const View2 = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: ${normalize(5)}px;

  background-color: #ffffff;
  height: ${normalize(56)}px;
  justify-content: space-between;
  width: ${normalize(327)}px;
  margin-bottom: ${normalize(25)}px;
  justify-content: center;
  border-radius: ${normalize(10)}px;
  border-width: ${normalize(1)}px;
  border-color: #d3e2e5;
`;

export const ViewLogin = styled.TouchableOpacity`
  height: ${normalize(56)}px;
  width: ${normalize(327)}px;
  border-radius: ${normalize(5)}px;
  background-color: #6f2da8;
  margin-top: 293px;
  justify-content: center;
  align-items: center;
`;

export const TextLogin = styled.Text`
  color: white;
  font-size: ${normalize(18)}px;
`;

import styled from "styled-components/native";
import normalize from "../../utils/normalize";

export const Container = styled.View`
  flex: 1;  
  background-color: #ffffff;
`;

export const ImageI = styled.Image`
  height: ${normalize(150)}px;
  width: ${normalize(150)}px;
  margin-top: ${normalize(-10)}px;
  margin-bottom: ${normalize(10)}px;
`;

export const Esquecisenha = styled.View`
  display: flex;
  flex-direction: row;
`;

export const EsquecisenhaText = styled.Text`
  color: white;
  font-size: ${normalize(13)}px;
  color: black;
  margin-left: ${normalize(8)}px;
`;


export const View2 = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;  
  background-color: #ffffff;  
  justify-content: space-between;  
  justify-content: center;
  height: ${normalize(55)}px;
  width: ${normalize(400)}px;  
  border-radius: ${normalize(5)}px;
  border-width: ${normalize(1)}px;
  border-color: #d3e2e5;
  margin-left: ${normalize(10)}px;
  margin-bottom: ${normalize(25)}px;  
`;

export const ViewLogin = styled.TouchableOpacity`
  height: ${normalize(55)}px;
  width: ${normalize(400)}px; 
  border-radius: ${normalize(5)}px;
  background-color: #6f2da8;
  margin-left: ${normalize(10)}px;
  margin-top: ${normalize(35)}%;
  justify-content: center;
  align-items: center;
`;

export const TextLogin = styled.Text`
  color: white;
  font-size: ${normalize(18)}px;
`;

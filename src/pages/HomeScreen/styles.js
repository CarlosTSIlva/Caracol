import styled from "styled-components/native";
import normalize from "../../utils/normalize";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
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

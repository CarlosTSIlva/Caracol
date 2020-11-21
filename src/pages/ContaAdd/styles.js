import styled from "styled-components/native";
import normalize from "../../utils/normalize";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Header = styled.TouchableOpacity`
  width: ${normalize(113)}%;
  height: ${normalize(108)}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f2f2f2;
`;

export const View2 = styled.View`
  display: flex;
  padding: ${normalize(5)}px;
  flex-direction: row;
  align-items: center;
  border-radius: ${normalize(5)}px;
  margin-left: ${normalize(40)}px;
  height: ${normalize(56)}px;
  justify-content: space-between;
  width: ${normalize(90)}%;
  border-radius: ${normalize(10)}px;
  border-width: ${normalize(1)}px;
  border-color: #d3e2e5;
`;

export const ViewLogin = styled.TouchableOpacity`
  height: ${normalize(56)}px;
  margin-left: ${normalize(10)}%;
  width: ${normalize(327)}px;
  margin-bottom: ${normalize(20)}px;
  border-radius: ${normalize(5)}px;
  margin-top: ${normalize(25)}px;
  background-color: #6f2da8;
  justify-content: center;
  align-items: center;
`;

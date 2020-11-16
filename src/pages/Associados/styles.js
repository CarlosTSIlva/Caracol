import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 108px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f2f2f2;
`;

export const Menu = styled.View`
  width: 100%;
  margin-top: 15px;
  flex-direction: row;
  padding: 5px;
  border-radius: 5px;
`;

export const ViewLogin = styled.TouchableOpacity`
  height: 56px;
  margin-left: 5%;
  width: 327px;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: #6f2da8;
  justify-content: center;
  align-items: center;
`;

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

export const Info = styled.View`
  width: 100%;
  padding: 8px;
  margin-top: 15px;
  flex-direction: row;
  border-radius: 5px;
`;

export const Modos = styled.View`
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
`;

export const Estilo = styled.View`
  width: 54px;
  height: 33px;
  border-radius: 15px;
  padding: 2px;
  margin-top: -5px;
  border: 1px;
  border-color: #dde3f0;
  display: flex;
`;

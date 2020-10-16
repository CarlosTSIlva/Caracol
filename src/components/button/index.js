import React from "react";

import { Container, ButtonText } from "./styles";

const ButtonTexts = ({ children, ...rest }) => (
  <Container {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default ButtonTexts;

import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({ border, children, style }: ContainerProps) => (
  <StyledContainer border={border} style={style}>
    {children}
  </StyledContainer>
);

export default Container;

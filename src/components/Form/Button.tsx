import styled from "styled-components";

export type buttonType = {
    children: any
}

export default function Button({ children}: buttonType) {
  return <StyledButton >{children}</StyledButton>;
}

const StyledButton = styled.button`
 
`;
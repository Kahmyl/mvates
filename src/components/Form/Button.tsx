import styled from "styled-components";

export type buttonType = {
    children: any
}

export default function Button({ children}: buttonType) {
  return <StyledButton >{children}</StyledButton>;
}

const StyledButton = styled.button`
background-color: white;
border: 2px solid blue;
border-radius: 0.5rem;
color: blue;
font-size: 1rem;
margin: 1rem;
padding: 0.2rem 1rem;
transition: all 0.4s ease-out;
&:hover {
  background-color: white;
}
`;
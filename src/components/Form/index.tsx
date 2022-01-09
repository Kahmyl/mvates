import styled from "styled-components";

const StyledForm = styled.form`
width: 60%;
margin: 1rem auto;
background-color: var(--blue);
padding: 1rem;
border-radius: 0.4rem;
`;

export type formType = {
    onSubmit?: any;
    children?: any;
}

export default function Form({ onSubmit, children }: formType) {
  return <StyledForm onSubmit={onSubmit} >{children}</StyledForm>;
}
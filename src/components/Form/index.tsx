import styled from "styled-components";

const StyledForm = styled.form`
`;

export type formType = {
    onSubmit?: any;
    children?: any;
}

export default function Form({ onSubmit, children }: formType) {
  return <StyledForm onSubmit={onSubmit} >{children}</StyledForm>;
}
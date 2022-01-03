import styled from "styled-components";

const StyledInput = styled.input`
  border radius: 2rem;
`;

export type inputType = {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: any;
}

export default function Input({ type, placeholder, value, onChange }: inputType) {
  return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />;
}
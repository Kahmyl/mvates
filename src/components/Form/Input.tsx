import styled from "styled-components";

const StyledInput = styled.input`
  border radius: 2rem;
`;

export type inputType = {
    type?: string;
    placeholder?: string;
    value?: any;
    onChange?: any;
    autoComplete?: string
    checked?:boolean
}

export default function Input({ type, placeholder, value, onChange, autoComplete, checked }: inputType) {
  return <StyledInput 
          checked={checked} 
          type={type} 
          placeholder={placeholder} 
          value={value} 
          onChange={onChange} 
          autoComplete={autoComplete} />;
}
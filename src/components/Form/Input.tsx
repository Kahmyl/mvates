import styled from "styled-components";

const StyledInput = styled.input`
width: 100%;
padding: 0.5rem 1rem;
margin: 0.5rem 0;
border: 1px solid darkgrey;
border-radius: 0.4rem;
box-sizing: border-box;
outline: none;
font-size: 1rem;
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
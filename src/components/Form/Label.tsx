import styled from "styled-components";

export type labelType = {
    htmlFor?: any
    children: any
}


const Styledlabel = styled.label`
 
`;

export default function Label({htmlFor, children}: labelType) {
    return(<Styledlabel htmlFor={htmlFor}>{children}</Styledlabel>);
}
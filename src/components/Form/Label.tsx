import styled from "styled-components";

export type labelType = {
    htmlFor?: any
    children: any
}


const Styledlabel = styled.label`
text-transform: uppercase;
font-size: 0.8rem;
`;

export default function Label({htmlFor, children}: labelType) {
    return(<Styledlabel htmlFor={htmlFor}>{children}</Styledlabel>);
}
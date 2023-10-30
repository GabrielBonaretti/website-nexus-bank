// styled components library
import styled from "styled-components";

export const ButtonStyled = styled.button`
    background: ${props => props.$primary ? "#DBB22F" : "transparent"};
    color: ${props => props.$primary ? "#1A1E1C" : "#DBB22F"};

    padding: 8px 21px;
    border-radius: 64px;
    border: 2px solid #DBB22F;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    transition: 0.4s; 

    &:hover {
        background: ${props => props.$primary ? "transparent" : "#DBB22F"};
        color: ${props => props.$primary ? "#DBB22F" : "#1A1E1C"};
        cursor: pointer;
    }
    
    &:active {
        display: none;
    }
`;
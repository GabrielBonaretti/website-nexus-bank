// Styled components
import styled from "styled-components";

export const NavStyled = styled.nav`
    display: flex;
    align-items: ${props => props.$menuHamburger ? "flex-end" : "center"};
    flex-direction: ${props => props.$menuHamburger ? "column" : "row"};
    gap: 32px;
    font-size: 100px;
`

export const Link = styled.a`
    text-decoration: none;
    color: white;
    font-size: 20px;
    /* display: inline-block; */
    position: relative;
   

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #DBB22F;
        transform-origin: bottom right;
        transition: transform 0.2s ease-out; 
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`
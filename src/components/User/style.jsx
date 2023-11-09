// importing styled components
import styled from "styled-components";

export const DivBackGround = styled.div`
    display: flex;
    gap: 15px;
    text-align: end;
    justify-content: center;
    align-items: center;
`


export const DivContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 11px;  
`

export const Name = styled.p`
    font-size: 18px;
    transform: translateX(10px);
`

export const Line = styled.div`
    background-color: #FFF;
    height: 1px;
    transform: translateX(5px);
`

export const DivBalance = styled.div`
    color: #ADB2B1;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    transform: translateX(12px);
`


export const Balance = styled.p`
    font-weight: ${props => props.$visible ? "500" : "700"};
    filter: ${props => props.$visible ? "none" : "blur(5px);"};
`

export const Img = styled.img`
    border: 3px solid #FFF;
    border-radius: 50%;
    height: 67px;
`


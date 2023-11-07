import styled from "styled-components";

export const DivBackground = styled.div`
    background-image: url("src/assets/images/banco.jpg");
    background-repeat: repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
`

export const DivFilter = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color:rgba(0,0,0,0.7);
`

export const DivForms = styled.div`
    animation: smooth-climb 0.7s ease-in-out;
    background-color: #1A1E1C;
    
    width: 35%;
    /* height: 70%; */
    padding: 50px;
    border-radius: 30px;
    

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 65px;
`

export const Title = styled.p`
    color: #FFF;
    font-family: Helvetica, sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    margin: 0px;
`
export const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    align-self: stretch;
`

export const Input = styled.input`
    width: 75%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #DBB22F;
    padding: 13px;
`

export const Button = styled.div`
    display: flex;
    width: 45%;
    padding: 12px;
    
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 8px;
    
    background: #DBB22F;
    
    &:hover {
        cursor: pointer;
    }
    
    &:active {
        /* background: #A9900D; */
        background: #ff00f2;
    }

`

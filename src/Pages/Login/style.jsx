import styled from "styled-components";

export const DivBackground = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1.5fr 1fr;   
    animation: smooth-appear 0.7s ease-in-out;
`

export const DivImage = styled.div`
    background-image: url("src/assets/images/dinheiroImg.jpg");
    background-repeat: repeat;
    background-size: cover;
    width: 100%;

`

export const DivFilter = styled.div`
    width: 100%;
    height: 100vh;
    background-color:rgba(0,0,0,0.7);
`

export const DivLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DivContent = styled.div`
    width: 60%;
    height: 50%;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
`

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export const Logo = styled.img`
    width: 40%;
    height: auto;
`

export const Title = styled.h1`
    margin: 0;
    font-weight: 600;
    font-size: 2.125rem;
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Button = styled.div`
  display: flex;
  padding: 12px;

  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 8px;

  background: ${props => props.$primary ? "#DBB22F" : "transparent"};
  color: #1a1e1c;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background: #a9900d;
  }
`;
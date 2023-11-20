import styled from "styled-components";

export const DivBackground = styled.div`
  background-image: url("src/assets/images/banco.jpg");
  background-repeat: repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  animation: smooth-appear 0.7s ease-in-out;
`;

export const DivFilter = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const DivForms = styled.form`
  animation: smooth-climb 0.7s ease-in-out;
  background-color: #1a1e1c;

  width: 500px;
  padding: 3% 0px;
  border-radius: 30px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  gap: 30px;
  
  @media (max-width: 650px) {
    padding: 30px;
    width: 80%;
  }
`;

export const Title = styled.p`
  color: #fff;
  font-family: Helvetica, sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  margin: 0px;

  @media (max-width: 650px) {
    font-size: 25px;
  }
`;
export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  
  width: 100%;
  gap: 20px;
  margin: 0;

  @media (max-width: 650px) {
    margin: 0;
    font-size: 25px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #dbb22f;
  padding: 10px;
`;

export const Button = styled.input`
  display: flex;
  width: 45%;
  padding: 12px;

  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 8px;
  border: none;

  background: #dbb22f;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background: #a9900d;
  }
`;


export const ImgLogo = styled.img`
  position: absolute;
  left: 25px;
  top: 25px;
`
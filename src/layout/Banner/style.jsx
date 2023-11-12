// styled componnets library
import styled from "styled-components";

export const DivContainer = styled.div`
  width: 80%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: smooth-climb 0.7s ease-in-out;
  user-select: none;

  @media (max-width: 1100px) {
    flex-direction: column;
    height: auto;
    gap: 50px;

  }
`;

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  width: 45%;
  
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 3.5rem;
  /* font-size: 56px; */
  font-weight: 700;
  line-height: 64px;
  letter-spacing: -1.4px;
  margin: 0;

  @media (max-width: 620px) {
    font-size: 3rem;
  }

  @media (max-width: 550px) {
    font-size: 2.5rem;
  }

  @media (max-width: 500px) {
    font-size: 2.3rem;
  }
`;

export const ContentText = styled.p`
  color: #adb2b1;
  font-size: 1.125rem;
  /* font-size: 18px; */
  font-weight: 400;
  line-height: 24px;
  margin: 0;

`;

export const Image = styled.img`
  -webkit-user-drag: none;
  user-select: none;
  ${props => props.$animation && "animation: ajust 0.5s ease-in-out;"}
  
  
  &:hover {
    ${props => props.$animation && "animation: shake 0.5s ease-in-out 1 both;"}
    
  }

  @keyframes shake {
    0% {
      transform: rotateZ(0deg);
    }
    33% {
      transform: rotateZ(-15deg);
    }
    66% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(-15deg);
    }
  }

  @keyframes ajust {
    0% {
      transform: rotateZ(-15deg);
    }
    100% {
      transform: rotateZ(0deg);
    }
  }

  @media (max-width: 550px) {
    width: 80vw;
  }

`;

export const DivCards = styled.div`
  width: 40%;
  max-height: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const ImageConfig = styled.img`
  position: relative;
  bottom: 0%;
  left: 0%;
`;

export const CardGold = styled(ImageConfig)`
  z-index: 2;
  animation: animation-card-halfblack 2s ease-in-out both;

  @keyframes animation-card-halfblack {
    from {
      transform: translate(0%, 28%);
    } to {
      transform: translate(10%, 13%) rotateX(45deg) rotateY(20deg)
        rotateZ(60deg);
    }
  }
`;

export const CardBlack = styled(ImageConfig)`
  z-index: 3;
  animation: animation-card-black 2s ease-in-out both;

  @keyframes animation-card-black {
    from {
      transform: translate(0%, -74.5%);
    } to {
      transform: translate(25%, -94.5%) rotateX(45deg) rotateY(25deg)
        rotateZ(75deg);
    }
  }
`;

export const CardWhite = styled(ImageConfig)`
  z-index: 1;
  animation: animation-card-white 2s ease-in-out both;

  @keyframes animation-card-white {
    from {
      transform: translate(0%, -175.7%);
    } to {
      transform: translate(0%, -175.7%) rotateX(50deg) rotateY(15deg)
        rotateZ(53deg);
    }
  }
`;


export const Image2 = styled.img`
  -webkit-user-drag: none;
  user-select: none;
  animation: spinning 3s linear infinite;

  @keyframes spinning {
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(90deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
`

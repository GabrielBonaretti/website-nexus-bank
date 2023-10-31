// styled componnets library
import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  width: 80%;
  height: 60vh;
  align-items: center;
  justify-content: space-between;
  animation: smooth-climb 0.7s ease-in-out;
  user-select: none;
`;

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  width: 45%;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: -1.4px;
  margin: 0;
`;

export const ContentText = styled.p`
  color: #adb2b1;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
`;

export const Image = styled.img`
  -webkit-user-drag: none;
  user-select: none;
  animation: giradinha 0.5s ease-in-out;
  &::after {
    animation: none;
  }

  &:hover {
    animation: tremidinha 0.5s ease-in-out 1 both;
  }

  @keyframes tremidinha {
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

  @keyframes giradinha {
    0% {
      transform: rotateZ(-15deg);
    }
    100% {
      transform: rotateZ(0deg);
    }
  }
`;

export const DivCards = styled.div`
  width: 40%;
  max-height: 100%;
  align-items: center;
  justify-content: center;

  /* animation: animation-card1 linear both;
  animation-timeline: view(block);
  animation-range: cover 20% cover 30%; */
`;

const ImageConfig = styled.img`
  position: relative;
  bottom: 0%;
  left: 0%;
`;

export const CardHalfBlack = styled(ImageConfig)`
  z-index: 2;
  animation: animation-card1 10s ease-in-out infinite both;

  @keyframes animation-card1 {
    0% {
      transform: translate(0%, 50%);
    }
    25% {
      transform: translate(0%, 50%);
    }
    50% {
      transform: translate(10%, 35%) rotateX(45deg) rotateY(20deg)
        rotateZ(60deg);
    }
    75% {
      transform: translate(10%, 35%) rotateX(45deg) rotateY(20deg)
        rotateZ(60deg);
    }
    100% {
      transform: translate(0%, 50%)  rotateX(0deg) rotateY(00deg)
        rotateZ(0deg);
    }
  }
`;

export const CardBlack = styled(ImageConfig)`
  z-index: 3;
  animation: animation-card2 10s ease-in-out both infinite;

  @keyframes animation-card2 {
    0% {
      transform: translate(0%, -51.5%);
    }
    20% {
      transform: translate(0%, -51.5%);
    }
    50% {
      transform: translate(25%, -71.5%) rotateX(45deg) rotateY(25deg)
        rotateZ(75deg);
    }
    75% {
      transform: translate(25%, -71.5%) rotateX(45deg) rotateY(25deg)
        rotateZ(75deg);
    }
    100% {
      transform: translate(0%, -51.5%)  rotateX(0deg) rotateY(00deg)
        rotateZ(0deg);

    }
  }
`;

export const CardWhite = styled(ImageConfig)`
  z-index: 1;
  animation: animation-card3 10s ease-in-out both infinite;

  @keyframes animation-card3 {
    0% {
      transform: translate(0%, -152.7%);
    }
    30% {
      transform: translate(0%, -152.7%);
    }
    50% {
      transform: translate(0%, -152.7%) rotateX(50deg) rotateY(15deg)
        rotateZ(53deg);
    }
    75% {
      transform: translate(0%, -152.7%) rotateX(50deg) rotateY(15deg)
        rotateZ(53deg);
    }
    100% {
      transform: translate(0%, -152.7%)  rotateX(0deg) rotateY(00deg)
        rotateZ(0deg);
    }
  }
`;

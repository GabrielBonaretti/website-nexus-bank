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
  animation: ajust 0.5s ease-in-out;

  &:hover {
    animation: shake 0.5s ease-in-out 1 both;
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
`;

export const DivCards = styled.div`
  width: 40%;
  max-height: 100%;
  align-items: center;
  justify-content: center;
`;

const ImageConfig = styled.img`
  position: relative;
  bottom: 0%;
  left: 0%;
`;

export const CardHalfBlack = styled(ImageConfig)`
  z-index: 2;
  animation: animation-card-halfblack 3s linear both;

  @keyframes animation-card-halfblack {
    from {
      transform: translate(0%, 50%);
    } to {
      transform: translate(10%, 35%) rotateX(45deg) rotateY(20deg)
        rotateZ(60deg);
    }
  }
`;

export const CardBlack = styled(ImageConfig)`
  z-index: 3;
  animation: animation-card-black 3s linear both;

  @keyframes animation-card-black {
    from {
      transform: translate(0%, -51.5%);
    } to {
      transform: translate(25%, -71.5%) rotateX(45deg) rotateY(25deg)
        rotateZ(75deg);
    }
  }
`;

export const CardWhite = styled(ImageConfig)`
  z-index: 1;
  animation: animation-card-white 3s linear both;

  @keyframes animation-card-white {
    from {
      transform: translate(0%, -152.7%);
    } to {
      transform: translate(0%, -152.7%) rotateX(50deg) rotateY(15deg)
        rotateZ(53deg);
    }
  }
`;

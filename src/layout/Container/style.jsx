// styled componnets library
import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  width: 80%;
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
  line-height: 24px; /* 133.333% */
  margin: 0;
`;


export const Image = styled.img`
  -webkit-user-drag: none;
  user-select: none;
  animation: giradinha 0.5s ease-in-out;
  /* &::after {
    animation: none;

  } */

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
`
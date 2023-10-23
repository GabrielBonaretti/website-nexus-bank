// styled componnets library
import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  width: 80%;
  gap: 32px;
  align-items: center;
`;

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 31px;
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

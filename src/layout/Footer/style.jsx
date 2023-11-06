import styled from "styled-components";

export const DivFooter = styled.div`
  background: rgba(40, 52, 48, 0.24);
  backdrop-filter: blur(8px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivContent = styled.div`
  width: 80%;
  height: 60%;
  margin: 5% 0%;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 80px;
`;

export const DivPartOne = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`;

export const DivLogo = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const DivColumns = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  gap: 32px;
`;

export const DivPartTwo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const TextLogo = styled.p`
  color: #adb2b1;
  margin: 0;
  width: 287px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: -0.48px;
`;

export const TextCopy = styled.p`
  color: #adb2b1;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
`;
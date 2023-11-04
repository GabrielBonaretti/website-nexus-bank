import styled from "styled-components";

export const DivQuestion = styled.div`
  display: flex;
  padding-bottom: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-bottom: 1.5px solid #adb2b1;
`;

export const DivTitleQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const TitleQuestion = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  margin: 0;
`;

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
`;

export const ContentQuestion = styled.p`
  display: ${props => props.$hidden ? "none" : "block"};
  color: #adb2b1;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  align-self: stretch;
  margin: 0;
`;

import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
`;

export const DivTopics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  line-height: 24px; /* 150% */
  `;

export const Text = styled.p`
  color: #adb2b1;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

import styled from "styled-components";

export const BackgroundFeedback = styled.div`
  display: flex;
  width: 360px;
  padding: 48px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  flex-shrink: 0;
  border-radius: 32px;
  background: rgba(170, 119, 28, 0.1);
  backdrop-filter: blur(8px);

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const DivIcon = styled.div`
  display: flex;
  padding: 16px;
  max-width: min-content;
  align-items: flex-start;
  gap: 10px;
  border-radius: 56px;
  background: rgba(219, 178, 47, 0.1);
`;

export const TextBrief = styled.p`
  align-self: stretch;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

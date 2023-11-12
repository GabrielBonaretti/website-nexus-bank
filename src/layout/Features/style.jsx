// import styled components
import styled from "styled-components";

export const DivFeatures = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
  width: 80%;
  animation: smooth-climb 0.7s ease-in-out;
`;

export const DivExemples = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  width: 100%;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 620px) {
    font-size: 3rem;
  }

  @media (max-width: 550px) {
    font-size: 2.5rem;
  }

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

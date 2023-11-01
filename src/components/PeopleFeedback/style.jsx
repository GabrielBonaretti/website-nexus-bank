import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

export const ProfilePic = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 48px;
`;

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Name = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.32px;
  margin: 0px;
  `;

export const Role = styled.p`
  color: #adb2b1;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  margin: 0px;
`;

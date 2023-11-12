// styled components
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  animation: smooth-appear 0.7s ease-in-out;
  user-select: none;
`;

export const DivButtons = styled.div`
  display: flex;
  gap: 20px;
  ${props => props.$menuHamburger ? "flex-direction: column; justify-content: flex-end;" : ""}
`;

export const LinkStyled = styled(Link)`
  color: #fff;
`;
import styled, { css } from "styled-components";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DivBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.5rem;

  width: 60%;
  padding: 7%;

  background-color: rgba(40, 52, 48, 0.24);

  border-radius: 25px;

  @media (max-width: 900px) {
    width: 80%;
  }
`;

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.p`
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 500px) {
    font-size: 35px;
  }
`;

export const Icon = styled.img`
  width: 120px;
  height: 120px;

  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #fff;

  @media (max-width: 500px) {
    width: 90px;
    height: 90px;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const Line = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: rgba(219, 178, 47, 0.7352);
`;

export const DivForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
`;

export const SeparatorInput = styled.div`
  display: flex;
  gap: 5%;

  @media (max-width: 1100px) {
    gap: 2rem;
    flex-direction: column;
  }
`;

export const Subtitle = styled.p`
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: flex-end;

  gap: 15px;
`;

export const IconEdit = styled(FontAwesomeIcon)`
  width: fit-content;

  &:hover {
    color: #dbb22f;
    cursor: pointer;
  }
`;

export const ButtonStyled = css`
  /* width: 20%; */
  width: 150px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #dbb22f;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonCancel = styled.button`
  ${ButtonStyled}

  color: #dbb22f;
  background-color: transparent;
  border: 1px solid #dbb22f;
  transition: 0.4s;

  &:hover {
    background-color: rgba(219, 178, 47, 0.2);
  }
`;

export const ButtonSend = styled.input`
  ${ButtonStyled}

  transition: 0.4s;

  &:hover {
    background-color: rgba(219, 178, 47, 0.8);
  }
`;

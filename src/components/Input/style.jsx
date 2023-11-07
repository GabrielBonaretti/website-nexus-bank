import styled from "styled-components";

export const Div = styled.div`
  width: 75%;
  height: fit-content;
`;

export const Text = styled.p`
  font-size: 15px;
  transform: translate(3%, 240%);
  pointer-events: none;
  width: fit-content;
  color: #aaa;
  height: fit-content;
  padding: 0;
  margin: 0;
  padding-left: 5px;
  padding-right: 5px;

  ${(props) => props.$focus && "animation: focus 0.2s linear both"};
  ${(props) => props.$blur && "animation: blur 0.2s linear both"};

  @keyframes focus {
    to {
      transform: translate(10px, 50%);
      color: #dbb22f;
      background-color: #1a1e1c;
    }
  }

  @keyframes blur {
    from {
      transform: translate(10px, 50%);
      color: #dbb22f;
      background-color: #1a1e1c;
    }
    to {
      transform: translate(5px, 160%);
      color: #aaa;
      background-color: #1a1e1c;
    }
  }
`;

export const InputStyled = styled.input`
  color: #aaa;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #dbb22f;
  padding: 15px;
  font-size: 13px;

  ${(props) => props.$focus && `
    outline: 0; 
    border-radius: 5px; 
    border: 1px solid #dbb22f;
  `};

  &:focus {
    outline: 0;
    border-radius: 5px;
    border: 1px solid #dbb22f;
  }
`;

// importing styled components
import styled from "styled-components";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DivBackGround = styled.div`
  display: flex;
  gap: 15px;
  text-align: end;
  justify-content: center;
  align-items: center;
`;

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const Name = styled.p`
  font-size: 17px;
  transform: translateX(10px);
`;

export const Line = styled.div`
  background-color: #fff;
  height: 1px;
  transform: translateX(5px);
`;

export const DivBalance = styled.div`
  color: #adb2b1;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  transform: translateX(12px);
`;

export const Balance = styled.p`
  font-weight: ${(props) => (props.$visible ? "500" : "700")};
  filter: ${(props) => (props.$visible ? "none" : "blur(5px);")};
`;

export const Img = styled.img`
  border: 3px solid #fff;
  border-radius: 50%;
  height: 67px;
  width: 67px;
  object-fit: cover;
`;

export const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
`
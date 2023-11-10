import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LabelText = styled.p`
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 5px;
`

export const InputStyled = styled.input`
    color: #aaa;
    width: 100%;
    background-color: transparent;
    border: none;
    border: 1px solid #dbb22f;
    padding: 12px;
    font-size: 15px;
    border-radius: 5px;

    &:focus {
        outline: 0;
        border: 1px solid #dbb22f;
    }

    &:disabled {
        background-color: rgba(80, 80, 80, 0.24);
        
    }
`

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    width: 100%;
`



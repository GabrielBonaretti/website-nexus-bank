// styled components
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #1A1E1C;
        padding: 0;
        margin: 0;
        font-family: "Inter", "Montserrat", sans-serif;
        color: white;
    }
    
    @keyframes smooth-climb {
        from {
            transform: translateY(5%);
            opacity: 0;
        }
        /* 65% {
            transform: translateY(-5%);
        } */
        to {
            transform: translateY(0%);
            opacity: 1;
        }
    }

    @keyframes smooth-appear {
        from {
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`;

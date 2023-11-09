// styled components
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        background-color: #1A1E1C;
        padding: 0;
        margin: 0;
        font-family: "Inter", "Montserrat", sans-serif;
        color: white;
        user-select: none;
    }
  
    @keyframes smooth-climb {
        from {
            transform: translateY(5%);
            opacity: 0;
        } to {
            transform: translateY(0%);
            opacity: 1;
        }
    }

    @keyframes smooth-appear {
        from {
            opacity: 0;
        } to {
            opacity: 1;
        }
    }
`;

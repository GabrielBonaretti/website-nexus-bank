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
    
    p {
        margin: 0
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

       // menu hamburger
    /* Position and sizing of burger button */
    .bm-burger-button {
        position: relative;
        width: 36px;
        height: 30px;
    }

    /* Color/shape of burger icon bars */
    .bm-burger-bars {
        background: #FFF;
    }

    /* Color/shape of burger icon bars on hover*/
    .bm-burger-bars-hover {
        background: #DBB22F;
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
        height: 24px;
        width: 24px;
    }

    /* Color/shape of close button cross */
    .bm-cross {
        background: #bdc3c7;
    }

    /*
    Sidebar wrapper styles
    Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
    */
    .bm-menu-wrap {
        position: fixed;
        height: 100%;
        top: 0;
    }

    /* General sidebar styles */
    .bm-menu {
        background: #232524;
        padding: 2.5em 1.5em 0;
        font-size: 1.15em;
    }

    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
        fill: #373a47;
    }

    /* Wrapper for item list */
    .bm-item-list {
        color: #b8b7ad;
        padding: 0.8em;

        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: space-between;
    }

    /* Individual item */
    .bm-item {
        display: flex;
    }

    /* Styling of overlay */
    .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
    }

    Individual item
    .bm-item {
        display: inline-block;

        color: #d1d1d1;
        margin-bottom: 10px;
        text-align: left;
        text-decoration: none;
        transition: color 0.2s;
    }

    .bm-item:hover {
        color: #ffffff;
    }
`;

import { createGlobalStyle } from "styled-components";
import { darkBlue, red } from "./Theme/Theme";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    transition: 0.3s;
}

body {
    font-family: "Outfit", sans-serif;
    
    background-color: ${darkBlue};

    @media (min-width: 1200px) {
    ::-webkit-scrollbar-track {
        background-color:  ${darkBlue};
    }
    ::-webkit-scrollbar {
        width: 10px;
        background: #F4F4F4;
    }
    ::-webkit-scrollbar-thumb {
        background:  #F4F4F4};
    }
    }


`;

import { createGlobalStyle } from "styled-components";
import { darkBlue } from "./Theme/Theme";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
        background-color: ${darkBlue};
    }


`;

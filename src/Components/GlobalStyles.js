import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";


const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    * {
        box-sizing:border-box; //border 고려. w와 h의 값은 border포함
    }
    body {
        font-family:serif;
        font-size:12px;
        background-color:rgba(20, 20, 20, 1);
        color: white;
        padding-top:50px;
    }
`;

export default globalStyles;
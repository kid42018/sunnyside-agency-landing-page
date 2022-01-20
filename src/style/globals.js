import { createGlobalStyle } from "styled-components";
import Themes from "./theme";
const Global = createGlobalStyle`
 *{
     margin:0;
     padding:0;
     box-sizing:border-box !important;
     transition: all 0.5s;
 }
 body,html,#root{
     width:100%;
     max-width:1440px;
     min-height:100vh !important;
     background-color:${Themes.white};
     font-family: 'Barlow', sans-serif;
     box-sizing:border-box !important;
 }
`;
export default Global;   

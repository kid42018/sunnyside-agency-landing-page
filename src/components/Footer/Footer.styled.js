import styled from "styled-components";
import Themes from "../../style/theme";
export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Themes.darkModerateCyan};
  box-sizing: border-box;
  h1{
      color:${Themes.darkDesaturatedCyan};
      font-weight: 900;
  }
  div{
    box-sizing: border-box;
      & > *{
          margin:20px;
          margin-top:50px;
          cursor: pointer;
          color:${Themes.darkDesaturatedCyan};
          font-weight: 600;
          &:hover{
              color:white;
          }
      }
      img{
          &:hover{
            filter:brightness(0)  invert(1) ;
              background-color: transparent;
          }
      }
  }
`

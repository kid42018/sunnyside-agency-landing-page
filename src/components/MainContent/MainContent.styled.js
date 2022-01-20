import styled from "styled-components";
import Themes from "../../style/theme";
export const StyledMainContent = styled.div`
 display:grid;
 height: auto;
 margin:auto;
 grid-template-areas: 
    "topleft topright"
    "middleleft middleright"
    "bottomleft bottomright";
   & > div{
       height:0px;
       padding-bottom: 95%;
       position: relative;
       background-size: 100% 100%;
     background-position: bottom;
     background-repeat: no-repeat;
       & > div{
           position: absolute;
           bottom: 0;
           height:100%;
           width: 100%;
           display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & > h1,& > p{
            color:${Themes.veryDarkDesaturatedBlue};
            margin-bottom: 50px;
        }
        & > p{
            opacity: 0.8;
        }
        & > h3{
            cursor: pointer;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            position: relative;
            z-index: 1;
            padding:0px 10px;
            box-sizing: border-box;
            & > span{
                position: absolute;
                bottom: 0;
                z-index: -1;
                width:120px;
                height:10px;
                background-color: red;
                border-radius: 50px;
                margin-top:-12px;
                left:0;right:0;
            }
        }
        &.bottom-info{
            justify-content: flex-end;
            padding-bottom: 30px;
        }
            & > *{
                max-width:400px;
                width:100%;
            }
       }

   }
   & > div:first-child{
     background-color: ${Themes.white};
     grid-area: topleft;
     &  span{
         background-color: ${Themes.softRed};
     }
   }    
   & > div:nth-child(2){
     background-image: url('/assets/desktop/image-transform.jpg');
     grid-area: topright;
   } 
   & > div:nth-child(3){
    background-image: url('/assets/desktop/image-stand-out.jpg');
     grid-area: middleleft;
   }    
   & > div:nth-child(4){
     background-color: ${Themes.white};
     grid-area: middleright;
     &  span{
         background-color: ${Themes.yellow};
     }
   }  
   & > div:nth-child(5){
    background-image: url('/assets/desktop/image-graphic-design.jpg');
     grid-area: bottomleft;
     color:${Themes.darkBlue};
     text-align: center;
   }  
   & > div:last-child{
    background-image: url('/assets/desktop/image-photography.jpg');
     grid-area: bottomright;
     color:${Themes.darkDesaturatedCyan};
     text-align: center;
   }  
   @media only screen and (max-width: 375px) {
        &{
            grid-template-areas: 
                "topright"
                "topleft"
                "middleleft"
                "middleright"
                "bottomleft"
                "bottomright";
        }
    
    } 
`

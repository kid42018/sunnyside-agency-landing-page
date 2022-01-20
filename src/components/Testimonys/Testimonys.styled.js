import styled from "styled-components";
import Themes from "../../style/theme";
export const StyledTestimonys = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   min-height: 500px;
   & > h1{
       width:100%;
       text-align: center;
       margin:0 !important;
       opacity: 0.3;
   }
   & > div{
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     margin-top:100px;
     & > div{
        width: 100%;
        max-width: 300px;
        display: flex;
        margin:10px;
        flex-direction: column;
        align-items: center;
        & > img{
            width:50px;
            height:50px;
            border-radius: 50%;
            margin-bottom:50px;
        }
        & > p{
            margin-bottom:50px;
            font-size: 0.9em;
            text-align: center;
            opacity: 0.8;
        }
        & > h3{
          font-size:0.95em;
          margin-bottom:5px;
        }
        & > span{
            font-size:0.8em;
            opacity: 0.5;
        }
     }
   }
`

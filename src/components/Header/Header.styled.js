import styled from "styled-components";
import Themes from "../../style/theme";
export const StyledHeader = styled.div`
    background-image: url('/assets/desktop/image-header.jpg');
    background-size: 1000px auto;
    background-position:top;
    background-repeat: no-repeat;
    background-color: ${Themes.headerBg};
    width:100%;
    height:500px;
    display: flex;
    flex-direction: column;
    padding:20px;
    flex-wrap: wrap;
    box-sizing:border-box;
    position: relative;
    nav{
       display: flex;
       justify-content: space-between;
       align-items: flex-start;
       box-sizing: border-box;
       img{
           margin: 0;
           display: none;
       }
    }
    h1{
        color:${Themes.white};
        outline: 0;
        font-family: 'Fraunces';
        font-weight: 900;
    }
    h1:nth-child(2){
       align-self: center;
       width: 100%;
       margin:0 !important;
       margin-top:50px !important;
       font-size: 2.5em;
       margin: auto;
       margin-bottom: auto;
       align-self:stretch;
       margin: auto;
       text-align: center;
    }
    img{
        width:20px;
        margin:0 auto;
        margin-top:80px;
    }
    ul{
        margin:0;
        padding:0;
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        flex:1;
        max-width:500px;
        height:auto;
        color:${Themes.white};
        li{
            width:100px;
            padding:10px;
            border-radius:100px;
            text-align: center;
            &:hover{
                background-color: rgba(255,255,255,0.5);
                cursor: pointer;
            }
            &.header-active{
                background-color: ${Themes.white};
                color:black;
                cursor: default;
            }
        }
    }
    @media only screen and (max-width: 375px) {
       nav{
                img{
                    display: block;
                }
                ul::before{
                    content: "";
                    width:100px;
                    height: 0px;
                    margin-left:auto;
                    margin-top:-20px;
                    border-top: 31px solid transparent;
                    border-left: 28px solid transparent;
                    border-right: 28px solid ${Themes.white};
                    border-bottom: 0px solid transparent;
                }
                ul{
                    box-sizing: border-box;
                    color:black;
                    right:5%;left:5%;top:80px;
                    justify-content: center;
                   position: absolute;
                   flex-direction: column;
                   background-color: ${Themes.white};
                   align-items: center;
                   padding:10px 0px;
                   li{
                       box-sizing: border-box;
                       color:${Themes.grayishBlue};
                       &.header-active{
                            background-color: ${Themes.yellow};
                            color:black;
                            cursor: default;
                        }
                   }
                }
       }
    }
`


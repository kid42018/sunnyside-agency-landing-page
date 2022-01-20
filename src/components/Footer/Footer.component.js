import React from 'react'
import { StyledFooter } from './Footer.styled'
export default function Footer() {
return (
 <StyledFooter> 
     <br/><br/>
     <h1>sunnyside</h1>
     <br/>
     <div>
         <span>About</span>
         <span>Services</span>
         <span>Projects</span>
     </div>
     <br/><br/>
     <div>
        <img src="/assets/icon-facebook.svg" alt="" />
        <img src="/assets/icon-instagram.svg" alt="" />
        <img src="/assets/icon-twitter.svg" alt="" />
        <img src="/assets/icon-pinterest.svg" alt="" />
     </div>
 </StyledFooter> 
)
}

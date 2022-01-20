import React,{useState,useEffect} from 'react'
import { StyledHeader } from './Header.styled'
export default function Header() {
const [isNavActive,setIsNavActive] = useState(true);
useEffect(()=>{
   window.onresize = ()=>{
       if(Number(window.innerWidth) < 375){
           setIsNavActive(false);
       }else{
           setIsNavActive(true);
       }
   }
},[]);
return (
 <StyledHeader> 
    <nav>
        <h1>sunnyside</h1>
        <img onClick={()=>setIsNavActive(!isNavActive)} src="/assets/icon-hamburger.svg" alt="" />
        {isNavActive ?    <ul>
            <li>About</li>
            <li>Service</li>
            <li>Projects</li>
            <li className="header-active">Contact</li>
        </ul> : null }
     
    </nav>
    <h1>We are creatives</h1>
    <img src="/assets/icon-arrow-down.svg" alt="" />
 </StyledHeader> 
)
}

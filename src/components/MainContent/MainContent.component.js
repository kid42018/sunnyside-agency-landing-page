import React from 'react'
import { StyledMainContent } from './MainContent.styled'
export default function MainContent() {
return (
 <StyledMainContent> 
     <div>
         <div>
            <h1>Transform your brand</h1>
            <p>We are full-service creative agency specializing in helping brands grow fast. Engage your clients throught compelling visuals that do most of marketing for you.</p>
            <h3><span></span>
                Learn More</h3>
         </div>
     </div>
     <div></div>
     <div></div>
     <div>
          <div>
            <h1>Stand out to the right audience</h1>
            <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
            </p>
            <h3>
            <span></span>
                Learn more
                </h3>
         </div>
     </div>
     <div>
         <div className='bottom-info'>
             <h1> Graphic design</h1>
             <p>  Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
         </div>
     </div>
     <div>
     <div className='bottom-info'>
             <h1>Photography</h1>
             <p>  Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
         </div>
     </div>
 </StyledMainContent> 
)
}

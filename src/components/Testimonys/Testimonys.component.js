import React from 'react'
import { StyledTestimonys } from './Testimonys.styled'
export default function Testimonys() {
const peopleData = [
    {
        img:"/assets/image-emily.jpg",
        testimony:"We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        name:"Emily R.",
        job:"Marketing Director"
    },
    {
        img:"/assets/image-thomas.jpg",
        testimony:"  Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
        name:"Thomas S.",
        job:"Chief Operating Officer"
    },
    {
        img:"/assets/image-jennie.jpg",
        testimony:"Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
        name:"Jennie F.",
        job:"Business Owner"
    }
]
return (
 <StyledTestimonys> 
     <h1>Client testimonials</h1>
     <div>
        {peopleData.map(p => (<div>
            <img src={p.img} alt="" />
            <p>{p.testimony}</p>
            <h3>{p.name}</h3>
            <span>{p.job}</span>
        </div>))}
     </div>
 </StyledTestimonys> 
)
}

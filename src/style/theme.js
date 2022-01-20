let Themes = {
     primary:{
       light:"rgb(61,184,58)",
       dark:""
     },
     headerBg:{
       light:"rgb(62,191,255)",
       dark:""
     },
     softRed:{
       light:"hsl(7, 99%, 70%)",
       dark:""
     },
     yellow:{
       light:"hsl(51, 100%, 49%)",
       dark:""
     },
     darkDesaturatedCyan:{
       light:"hsl(167, 40%, 24%)",
       dark:""
     } ,
     darkBlue:{
       light:"hsl(198, 62%, 26%)",
       dark:""
     },
     darkModerateCyan:{
       light:"hsl(168, 34%, 41%)",
       dark:""
     },
     veryDarkDesaturatedBlue:{
       light:"hsl(212, 27%, 19%)",
       dark:""
     },
     veryDarkGrayishBlue:{
       light:"hsl(213, 9%, 39%)",
       dark:""
     },
     darkGrayishBlue:{
       light:"hsl(232, 10%, 55%)",
       dark:""
     },
     grayishBlue:{
       light:"hsl(210, 4%, 67%)",
       dark:""
     },
     white:{
        light:"hsl(0, 0%, 100%)",
        dark:""
     } 
 }
export const Theme = {
  light: Object.keys(Themes).reduce((theme,color)=>{
     theme[color] = Themes[color]["light"];
     return  theme
   },{}),
   dark: Object.keys(Themes).reduce((theme,color)=>{
     theme[color] = Themes[color]["dark"];
     return  theme
   },{})
 }
 Themes = Object.keys(Themes).reduce((theme,color)=>{
   theme[color] = props => props.theme[color];
   return  theme
 },{})
 export default Themes;

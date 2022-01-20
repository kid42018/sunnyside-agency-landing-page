import styled from "styled-components";
import Themes from "../../style/theme";
export const StyledGallary = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: 400px;
  & > div{
    background-size: 100% 100%;
  }
  &  > div:first-child{
    background-image:url("/assets/desktop/image-gallery-milkbottles.jpg");
  }
  & > div:nth-child(2){
    background-image:url("/assets/desktop/image-gallery-orange.jpg");
  }
  & > div:nth-child(3){
    background-image:url("/assets/desktop/image-gallery-cone.jpg");
  }
  & > div:last-child{
    background-image:url("/assets/desktop/image-gallery-sugarcubes.jpg");
  }
  @media only screen and (max-width: 375px) {
      &{
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(2,200px);
      }
  }
`

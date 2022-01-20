import { ThemeProvider } from "styled-components";
import { Theme } from "./style/theme";
import Global from "./style/globals";
import {Gallary, Header,Footer, MainContent, Testimonys} from "./components";
function App() {
 return (
   <ThemeProvider theme={Theme.light}>
     <Global/>
     <Header />
     <MainContent />
     <Testimonys />
     <Gallary />
     <Footer />
   </ThemeProvider>
 );
}
export default App;

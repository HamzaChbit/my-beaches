
import { Footer } from "./componets/Footer";
import { Hero } from "./componets/hero";
import { ImageSlider } from "./componets/ImageSlider";
import { Navbar } from "./componets/Navbar";
import { Offers } from "./componets/Offers";
import { Plan } from "./componets/Plan";
import { Rooms } from "./componets/Rooms";
import { BackToScroll } from "./componets/BackToScroll";

function App() {
  return (
    <div className="App">
    
   
       <Navbar/>
     
   <Hero/>
        <Offers/>
        <Plan/>
       <Rooms/>
         <ImageSlider/>
          <Footer/>
          <BackToScroll/>
         

 
  
   
    </div>
  );
}

export default App;

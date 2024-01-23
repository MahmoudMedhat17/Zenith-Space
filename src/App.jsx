import { useEffect } from "react";
import { Navbar, Hero, Services, SectionOne, SectionTwo, Footer } from "./Components";
import AOS from "aos";

const App = () => {

  // useEffect used For animation using AOS library 
  useEffect(() => {
    AOS.init({
      duration: "1200",
      easing: "ease-in-out"
    });
  });


  return (
    <div>
      <div className="h-[700px] relative">
        <video
          src="assets/earth-around-bg.mp4"
          autoPlay
          loop
          muted
          className="fixed top-0 right-0 h-[700px] w-full object-cover z-[-1]"
        />
        <Navbar />
        <Hero />
      </div>
      <Services />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  )
}

export default App;
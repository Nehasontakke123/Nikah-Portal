import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import Footer from "./components/Footer";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// ... etc

const App = () => {
  return (
    <>
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        
      </Routes> 
      <Footer/>
    </>
  );
};

export default App;

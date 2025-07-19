import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import Footer from "./components/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import PlansPage from "./pages/PlansPage";
import ContactUsPage from "./pages/ContactUsPage";
import FeedbackPage from "./pages/FeedbackPage";
// ... etc

const App = () => {
  return (
    <>
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/plans" element={<PlansPage />} />
        {/* Add other routes as needed */}
        <Route path="/contact" element={<ContactUsPage />} />
         <Route path="/blogs" element={<FeedbackPage />} />
      </Routes> 
      <Footer/>
    </>
  );
};

export default App;

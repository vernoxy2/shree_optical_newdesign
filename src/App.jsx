import ScrollToTop from './components/scrollToTop/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './screens/home/Home';
import AboutUs from './screens/aboutUs/AboutUs';
import Footer from './components/footer/Footer';
// import MensProduct from './screens/productCategory/mensProduct/MensProduct';
// import WomensProduct from './screens/productCategory/womensProduct/WomensProduct';
// import KidsProduct from './screens/productCategory/kidsProduct/KidsProduct';
// import Products from './screens/products/Products';
import ContactUs from './screens/contactUs/ContactUs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      delay: 200, 
      offset: 140      // delay in ms
      // once: true,     // animation only once when scrolling down
    });
  })

  return (
    <Router>
      <div className="overflow-x-hidden">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/contactus" element={<ContactUs />} />
          {/* <Route path="/mens-product" element={<MensProduct />} /> */}
          {/* <Route path="/womens-product" element={<WomensProduct />} /> */}
          {/* <Route path="/kids-product" element={<KidsProduct />} /> */}
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

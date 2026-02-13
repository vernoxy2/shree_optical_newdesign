import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "./assets/logo.svg";


// ✅ Lazy load pages
const Home = lazy(() => import("./screens/home/Home"));
const AboutUs = lazy(() => import("./screens/aboutUs/AboutUs"));
const Products = lazy(() => import("./screens/products/Products"));
const ContactUs = lazy(() => import("./screens/contactUs/ContactUs"));

function AppContent() {
  const location = useLocation();

  // Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 400,
      once: false,
    });
  }, []);

  // Refresh AOS on route change
  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Suspense
          fallback={
            <div className="flex flex-col justify-center items-center h-screen text-xl space-y-5">

              <img src={Logo} alt="" loading="lazy" className="animate-pulse"/>
              <p>Loading...</p>

            </div>
          }
        >
        <Navbar />

        {/* ✅ Wrap Routes inside Suspense */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>

        <Footer />
      </Suspense>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Signup from "./components/Login and SignUp/Signup";
import Login from "./components/Login and SignUp/Login";
import Restaurants from "./Pages/Restaurants";
import Offers from "./Pages/Offers";

const Routing = () => {
  const userData = async () => {
    const response = await fetch("https://mosho.onrender.com/api/me", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    const data = await response.json();
    localStorage.setItem("username", data.name);
    localStorage.setItem("role", data.role);
    // setRole(data.role);
  };
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/offers" element={<Offers />} />
        <Route exact path="/restaurants" element={<Restaurants />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/register" element={<Signup />} />
        <Route exact path="/login" element={<Login userData={userData} />} />
      </Routes>
    </Router>
  );
};

export default Routing;

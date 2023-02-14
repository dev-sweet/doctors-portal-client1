import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import HomeAppointment from "./HomeAppointment";
import HomeContact from "./HomeContact";
import Info from "./Info";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Navbar from "../Shared/Navbar";
import Main from "../../Layout/Main";
const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <HomeAppointment />
      <Testimonials />
      <HomeContact />
    </div>
  );
};

export default Home;

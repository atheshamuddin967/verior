import Banner from "../Banner/Banner";
import Counter from "../components/Counter/Counter";
import Free from "../components/FreeCounsult/Free";
import Get from "../components/Get/Get";
import Head from "../components/Headertop/Head";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import Whychose from "../components/Services/Whychose";
import Marqueslider from "../components/Slider/Carousleslider";
import Footer from "../components/footer/Footer";
import Portfliosection from "../components/portfolio/Portfliosection";
import Welcome from "../components/welcome/Welcome";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Main() {
  useEffect(() => {
    console.log("Initializing AOS");
    AOS.init({ duration: 2000, offset: 320 });
  }, []);
  const [openModl, setOpenModal] = useState(false);
  const open = () => {
    setOpenModal(true);
  };
  const close = () => {
    setOpenModal(false);
  };
  return (
    <div className="contentContainer">
      <Head open={open} />
      <div className="sticky-top">
        <Navbar open={open} />
      </div>

      <Banner />
      {openModl && <Get close={close} />}
      <Welcome />
      <Services />
      <Whychose />
      <Portfliosection />
      <Counter />
      <Marqueslider />
      <Free />
      <Footer open={open} />
    </div>
  );
}

export default Main;

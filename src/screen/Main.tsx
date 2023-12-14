import Banner from "../Banner/Banner";
import Counter from "../components/Counter/Counter";
import Free from "../components/FreeCounsult/Free";
import Head from "../components/Headertop/Head";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import Whychose from "../components/Services/Whychose";
import Marqueslider from "../components/Slider/Carousleslider";
import Footer from "../components/footer/Footer";
import Portfliosection from "../components/portfolio/Portfliosection";
import Welcome from "../components/welcome/Welcome";

function Main() {
  return (
    <div className="contentContainer">
      <Head />
      <div className="sticky-top">
        <Navbar />
      </div>

      <Banner />
      <Welcome />
      <Services />
      <Whychose />
      <Portfliosection />
      <Counter />
      <Marqueslider />
      <Free />
      <Footer />
    </div>
  );
}

export default Main;

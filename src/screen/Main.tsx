import Banner from "../Banner/Banner";
import Head from "../Headertop/Head";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Welcome from "../welcome/Welcome";

function Main() {
  return (
    <div>
      <Head />
      <Navbar />
      <Banner />
      <Welcome />
      <Services />
    </div>
  );
}

export default Main;

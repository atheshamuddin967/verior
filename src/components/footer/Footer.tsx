import "./footer.scss";
import verior from "../../Images/VERIOR.png";
import { Link } from "react-router-dom";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row space">
          <div className="col-sm-3">
            <div className="logoimg">
              <h4>Where ideas meet innovation – welcome to Verior</h4>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="pagelist">
              <h3>About</h3>
              <ul>
                <li>
                  <Link to="#Home">Home</Link>
                </li>
                <li>
                  <Link to="#About">About Us</Link>
                </li>
                <li>
                  <Link to="#Services">Services</Link>
                </li>
                <li>
                  <Link to="#Portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="#Free">Get A Quote</Link>
                </li>
                <li>
                  <Link to="#Book">Book free Consultation</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="contact">
              <h3>Contact us</h3>
              <ul>
                <li>
                  <LuPhone className="icon" />
                  <Link to="tel:+92345353176">+923453531876</Link>
                </li>
                <li>
                  <MdOutlineEmail className="icon" />
                  <Link to="mailto:hr@verior.co">hr@verior.co</Link>
                </li>
                <li>
                  <CiLocationOn className="icon" />
                  <Link to="/">
                    Office No:218 Dawood center autobhan hyderabad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="follow">
              <h3>Follow us</h3>
              <li>
                <Link to="">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="">
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link to="">
                  <FaFacebookF />
                </Link>
              </li>
              <h6>NewsLetter</h6>
              <div className="subscribe">
                <input type="email" placeholder="Your Email" />
                <button>
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

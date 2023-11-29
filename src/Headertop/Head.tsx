import "./Header.scss";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Head() {
  return (
    <div className="head">
      <div className="container">
        <div className="row rows">
          <div className="col-sm-6">
            <div className="headerlist">
              <ul>
                <li>
                  <Link to="/">
                    <IoLocationOutline className="icon" /> Hyderabad sindh
                    Pakistan
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <IoCallOutline className="icon" /> +923000000000
                  </Link>
                </li>{" "}
                <li>
                  <Link to="/">
                    <MdOutlineMail className="icon" /> Verior@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="headerlist2 ">
              <ul>
                <li>
                  <Link to="/">
                    <FaFacebookF className="icon" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaLinkedinIn className="icon" />
                  </Link>
                </li>{" "}
                <li>
                  <Link to="/">
                    {" "}
                    <FaInstagram className="icon" />
                  </Link>
                </li>
                <li>
                  <button>Book Now</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;

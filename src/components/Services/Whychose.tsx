import serviceimg from "../../Images/serviceimg.jpg";
import { FaLeaf } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaAnchor } from "react-icons/fa6";

function Whychose() {
  return (
    <div className="choose">
      <div className="container">
        <div className="row space">
          <div className="headings">
            <h2>Why Choose Us?</h2>
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-6 w">
            <div
              className="servicedetails"

              // data-aos-once="true"
            >
              <ul>
                <li data-aos="fade-right">
                  <div className="iconschose">
                    <FaLeaf />
                  </div>
                  <h5>Quality Product</h5>
                  <p>
                    We believe in Software Quality that is essential to deliver
                    the product on time and on the required quality.
                  </p>
                </li>
                <li>
                  {" "}
                  <div className="iconschose">
                    <MdWatchLater />
                  </div>
                  <h5>TIMELY WORK</h5>
                  <p>
                    We always plan the Project Development schedule for
                    deploying the Project on time with all completed
                    requirements.
                  </p>
                </li>
                <li>
                  {" "}
                  <div className="iconschose">
                    <TbWorld />
                  </div>
                  <h5>RELIABILITY</h5>
                  <p>
                    Failure Free Products are our main target.We always develope
                    the most reliable Products without any failure issue on
                    future.
                  </p>
                </li>
                <li data-aos="fade-right">
                  {" "}
                  <div className="iconschose">
                    <FaAnchor />
                  </div>
                  <h5>MAINTAINABLE</h5>
                  <p>
                    Our Products are fully maintainable for the injection of any
                    new Functionality or Requirement
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 c">
            <div className="imgchoose">
              <img src={serviceimg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whychose;

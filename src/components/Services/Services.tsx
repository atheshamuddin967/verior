import ServicesData from "../../Data/Data";
import SericeItem from "./SericeItem";
import "./Services.scss";

function Services() {
  return (
    <div className="content-section" id="Services">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="headings">
              <h2 className="">Our Services</h2>
            </div>
          </div>
        </div>
        <div className="row space">
          {ServicesData.map((item) => (
            <SericeItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

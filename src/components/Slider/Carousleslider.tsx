import Marquee from "react-fast-marquee";
import html from "../../Images/html.png";
import css from "../../Images/css.png";
import js from "../../Images/js.png";
import reacts from "../../Images/react.png";
import angular from "../../Images/angular.png";
import ios from "../../Images/ios2.png";
import php from "../../Images/php.png";
import node from "../../Images/node.png";
import vue from "../../Images/vue.png";
import "./Slider.scss";
function Marqueslider() {
  return (
    <div className="container-fluid">
      <div className="row space">
        <div className="col-sm-12">
          <div className="headings">
            <h2>We are working on these Technologies</h2>
          </div>
        </div>
      </div>
      <Marquee>
        <div className="markitem">
          <img src={html} alt="code" />
        </div>
        <div className="markitem">
          <img src={css} alt="code" />
        </div>
        <div className="markitem">
          <img src={js} alt="code" />
        </div>
        <div className="markitem">
          <img src={angular} alt="code" />
        </div>
        <div className="markitem">
          <img src={reacts} alt="code" />
        </div>
        <div className="markitem">
          <img src={php} alt="code" />
        </div>
        <div className="markitem">
          <img src={node} alt="code" />
        </div>
        <div className="markitem">
          <img src={ios} alt="code" />
        </div>
        <div className="markitem">
          <img src={vue} alt="code" />
        </div>
      </Marquee>
    </div>
  );
}

export default Marqueslider;

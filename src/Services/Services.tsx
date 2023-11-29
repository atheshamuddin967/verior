import Images from "../Images/Index";
import SericeItem from "./SericeItem";
import "./Services.scss";
import { PiCodeBold } from "react-icons/pi";

function Services() {
  return (
    <div className="container">
      <div className="row space">
        <SericeItem
          title={"Web Desinging"}
          image={Images.web}
          detail={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus at enim ex aperiam perferendis numquam eius adipisci facere vel? Harum facilis corporis expedita"
          }
          icon={<PiCodeBold />}
        />
        <SericeItem
          title={"App development"}
          image={Images.app}
          detail={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus at enim ex aperiam perferendis numquam eius adipisci facere vel? Harum facilis corporis expedita"
          }
          icon={<PiCodeBold />}
        />
      </div>
    </div>
  );
}

export default Services;

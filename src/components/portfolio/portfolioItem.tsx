import { Link } from "react-router-dom";
import { FiLink } from "react-icons/fi";
import { ImZoomIn } from "react-icons/im";

function PortfolioItem({ project }: any) {
  return (
    <div className="col-sm-4 mb-3" key={project.id}>
      <div className="porItem" data-aos="flip-left">
        <div className="portshadow"></div>
        <div className="portdetail">
          <ul>
            <li>
              <Link to="/">
                <FiLink />
              </Link>
            </li>
            <li>
              <Link to="/">
                <ImZoomIn />
              </Link>
            </li>
          </ul>
          <p>{project.projectName}</p>
        </div>
        <img src={project.projectImg} alt="projects" />
      </div>
    </div>
  );
}

export default PortfolioItem;

import ProjectData from "../../Data/ProjectData";
import projects from "../../Images/projects.png";
import "./Portfolio.scss";
import PortfolioItem from "./portfolioItem";
function Portfliosection() {
  return (
    <div className="content-section" id="Portfolio">
      <div>
        <div className="container">
          <div className="row space">
            <div className="headings">
              <h2>We are One Stop Solution Providers</h2>
            </div>
          </div>
        </div>{" "}
        <div className="project">
          <img src={projects} alt="project" />
        </div>
        <div className="container">
          <div className="row space">
            <div className="headings">
              <h2>This is our Latest Work</h2>
              <p>
                You can review some of the projects that were successfully
                implemented by verior.
              </p>
            </div>
          </div>
          <div className="row space">
            {ProjectData.map((project) => (
              <PortfolioItem project={project} />
            ))}
          </div>
          <div className="row">
            <div className="col-sm-12">
              {" "}
              <div className="protfoliobtn">
                <button>View Portfolio</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfliosection;

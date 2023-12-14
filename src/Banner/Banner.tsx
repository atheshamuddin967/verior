import Images from "../Images/Index";
import "./Banner.scss";
function Banner() {
  return (
    <div className="content-section" id="Home">
      <div className="banner">
        <div className="container">
          <div className="row rows">
            <div className="col-sm-6">
              <div className="banner-detail">
                <h2>Welcome To Verior</h2>
                <h6>Leading top softwarehouse in pakistan</h6>
                <p>
                  we offer our services Web desinging Digital mareting & Mobile
                  App
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="banner-img">
                <img src={Images.banner} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

import Images from "../Images/Index";
import "./welcome.scss";
function Welcome() {
  return (
    <div className="container">
      <div className="row space rows">
        <div className="col-sm-2">
          <img src={Images.logo} alt="" />
        </div>
        <div className="col-sm-10">
          <div className="welcome-detail">
            <h6>ABOUT OUR COMPANY</h6>
            <h5>
              Providing Your Business With A Quality IT Service is Our Passion
            </h5>
            <p>
              Verior is an IT Software Company founded in Sep 2015 in Pakistan.
              We are offering multiple services in Website Development, Graphic
              Designing, Digital Marketing, and Mobile Apps Development. We make
              CMS, CRM and provide ERP solutions. verior is a top software house
              in Pakistan and also a registered company in Pakistan (PSEB).
              Additional services that we provide include website Designing,
              API's Development, SEO Services and IOS app development. We have
              highly experienced web developers who have successfully launched
              various huge projects and proved their skills in many projects. We
              are responsible for the working, and we try to keep the best
              relationship with our customers. As a Leading Software house in
              Pakistan, We have designed hundreds of Websites, Mobile Apps,
              Logos and Icons for our clients with a unique research-based
              process. Our software house is spreading the best services in the
              industry of IT from last seven years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

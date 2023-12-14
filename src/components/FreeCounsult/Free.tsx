import "./Free.scss";
import constul from "../../Images/const.jpeg";
function Free() {
  return (
    <div className="content-section" id="Free">
      <div className="container">
        <div className="row space">
          <div className="col-sm-12">
            <div className="headings">
              <h2>Book free Consultation</h2>
            </div>
          </div>
          <div className="row space">
            <div className="col-sm-6">
              <div className="const">
                <img src={constul} alt="consultant" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="formslayout">
                <h5>Request Your Free Consultation Now</h5>
                <form action="">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="input-group mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Your Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter Your Phone#"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-floating mb-3">
                        <textarea
                          className="form-control"
                          id="floatingTextarea"
                          rows={7}
                          placeholder="Some Detail about your project"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="mb-3 mt-3">
                      <button className="form-control">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Free;

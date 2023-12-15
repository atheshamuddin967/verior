import "./Get.scss";

function Get({ close }: any) {
  return (
    <div className="getLayout">
      <div className="getinner">
        <div className="closebtn">
          <button onClick={close}>x</button>
        </div>
        <div className="container">
          <div className="headings mb-3">
            <h2>Get A Quote</h2>
          </div>
          <form action="">
            <div className="col-sm-12">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="col-sm-12">
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone#"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="mb-3">
                <textarea
                  placeholder="Details About Project"
                  className="form-control"
                  rows={5}
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="mb-3">
                <button className="form-control">submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Get;

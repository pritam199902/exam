const Signup = () => {
  // MAIN COMPONENT
  return (
    <div className="container mt-5">
      <div className="row m-auto">
        <div className="col-lg-8 col-md-8 col-sm-9 m-auto">
          <div className="card shadow">
            <div className="card-body ">
              {/* HEADER */}
              <div className="row">
                <div className="col">
                  <h3
                    className="text-center"
                    style={{ color: txtColor.color, fontWeight: "bold" }}
                  >
                    <img
                      src="./logo1.png"
                      width="40"
                      height="40"
                      className="d-inline-block align-top"
                      alt=""
                      loading="lazy"
                    />
                    SIGN UP
                  </h3>
                </div>
              </div>
              {/* INPUTS  */}
              <div className="row mt-2">
                <div className="col-lg-8 col-md-8 col-sm-9 m-auto">
                  {/* NAME */}
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      aria-label="Name"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  {/* EMAIL */}
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-envelope"></i>
                      </span>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  {/* PASSWORD */}
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  {/* CON-PAASSWORD */}
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      aria-label="Confirm Password"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  {/* LOGIN BUTTON */}
                  <center>
                    <button className="btn btn-info pb-2 px-4">
                      Sign Up <i className="fa fa-user-plus ml-2"></i>
                    </button>
                    <p className="mt-2 mb-1" style={{ color: txtColor.light }}>
                      Already have an account? <a href="/signin">Sign In</a>
                    </p>
                  </center>
                  {/*  */}
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

const txtColor = {
  color: "#777777",
  light: "#aaaaaa",
};

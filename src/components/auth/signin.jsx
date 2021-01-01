import ErrorMsg from "../error";

const Signin = () => {
  // ERROR MSG
  // const errMsg = { message: "asdasd", class: "success" };

  return (
    <div className="container mt-5">
      <div className="row m-auto">
        <div className="col-lg-6 col-md-6 col-sm-8 m-auto">
          <div className="card shadow">
            <div className="card-body">
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
                    SIGN IN
                  </h3>
                </div>
              </div>
              {/* ERROR COMP */}
              {/* <ErrorMsg /> */}
              {/* INPUTS  */}
              <div className="row mt-2">
                <div className="col-lg-8 col-md-8 col-sm-9 m-auto">
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

                  {/* LOGIN BUTTON */}
                  <center>
                    <button className="btn btn-success pb-2 px-4">
                      Sign In <i className="fa fa-sign-in-alt ml-2"></i>
                    </button>
                    <p className="mt-2 mb-1" style={{ color: txtColor.light }}>
                      Don't have ay account? <a href="/signup">Sign Up</a> now!
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

export default Signin;

const txtColor = {
  color: "#777777",
  light: "#aaaaaa",
};

import { useState } from "react";

import Nav from "./nav";

const Account = (props) => {
  // DATA

  const [userName, setUserName] = useState("user name");
  const [userEmail, setUserEmail] = useState("user@email.com");

  // SHOW SECTION
  return (
    <>
      <Nav data={{ section: "Account" }} />

      <div className="container mt-2 ">
        {/* TOP */}
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-7 m-auto">
            {/* CARD 1 */}
            <div className="card shadow">
              <div className="card-body py-3">
                <div className="row mt-2">
                  <div className="col m-auto  text-center">
                    <h2
                      style={{ color: txtColor.color }}
                      className="text-warning"
                    >
                      <i className="fa fa-user mr-2"></i> {userName}
                    </h2>
                    <h5 style={{ color: txtColor.light }} className="mb-0">
                      <i className="fa fa-envelope mr-2"></i> {userEmail}
                    </h5>
                    {/* EDIT BUTTON */}
                    <div className="row mt-2">
                      <div className="col text-center">
                        <button
                          className="btn shadow btn-secondary"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Edit My Account"
                          data-toggle="modal"
                          data-target="#staticBackdrop"
                        >
                          <i className="fas fa-pen"></i>
                        </button>
                      </div>
                    </div>
                    {/* end of EDIT BUTTON */}
                    {/* CHANGE PASSWORD BUTTON */}
                    <div className="row mt-2">
                      <div className="col text-center">
                        <button
                          className="btn shadow btn-secondary"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Edit My Account"
                          data-toggle="modal"
                          data-target="#staticBackdrop"
                        >
                          <i className="fas fa-pen mr-2"></i>CHANGE PASSWORD
                        </button>
                      </div>
                    </div>
                    {/* end of EDIT BUTTON */}
                  </div>
                </div>
              </div>
            </div>
            {/* end of CARD 1 */}

            {/* EDIT DIV */}
            <div
              className="modal fade"
              id="staticBackdrop"
              data-backdrop="static"
              data-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title " id="staticBackdropLabel">
                      EDIT ACCOUNT INFO
                    </h5>

                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    {/*  */}
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <i className="fa fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="basic-addon1"
                        value={userName}
                        onChange={(e) => {
                          e.preventDefault();
                          setUserName(e.target.value);
                        }}
                      />
                    </div>
                    {/* EMAIL */}
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <i className="fa fa-envelope"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                        value={userEmail}
                        onChange={(e) => {
                          e.preventDefault();
                          console.log(e.target.value);
                          setUserEmail(e.target.value);
                        }}
                      />
                    </div>
                    {/*  */}
                    <center>
                      <button
                        type="button"
                        className="btn btn-dark"
                        data-dismiss="modal"
                      >
                        SAVE
                      </button>
                    </center>
                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
            {/* end of EDIT DIV */}
          </div>
        </div>
        {/* end of TOP */}
      </div>
    </>
  );
};

export default Account;

const txtColor = {
  color: "#777777",
  light: "#aaaaaa",
};

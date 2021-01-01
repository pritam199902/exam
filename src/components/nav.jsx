// background-image: linear-gradient(to right top, #ffde00, #ffb800, #ff8f00, #ff6100, #fd1b1b);

const Nav = (props) => {
  console.log("nav data >> ", props.data);
  const data = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "New Test",
      path: "/new-test",
    },
    {
      title: "All Test",
      path: "/all-test",
    },
    {
      title: "Account",
      path: "/account",
    },
  ];

  // NAV ITEM
  const NavItem = (info, tp) => {
    const cls = info.title === tp ? "nav-item active" : "nav-item";
    return (
      <li key={info.title} className={cls}>
        <a className="nav-link" href={info.path}>
          {info.title}
        </a>
      </li>
    );
  };

  // COMPONENT - NAV
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <a className="navbar-brand" style={{ color: "#fff" }} href="/">
        <h2 className="text-warning mb-0">
          <img
            src="./logo1.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
          PM
        </h2>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {data.map((info, i) => {
            // return <NavItem key={i} info={info} />;
            console.log("changed");
            return NavItem(info, props.data.section);
          })}

          {/* <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/new-test">
              New Test
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/all-test">
              All Test
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/account">
              Account
            </a>
          </li> */}
        </ul>
        <div className="form-inline my-2 my-lg-0">
          <a href="#logout" className="btn btn-warning">
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

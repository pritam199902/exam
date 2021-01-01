import { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Signin from "./auth/signin";
import Signup from "./auth/signup";
import Dash from "./dash";
import AllTest from "./tests/testList";
import NewTest from "./tests/newTest";
import Account from "./account";

//

function Main() {
  // DATA
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // MAIN COMP
  return (
    <div className="App">
      <>
        <Router>
          <Switch>
            <Route path="/" exact>
              {isAuthenticated ? <Dash /> : <Redirect to="/signin" />}
            </Route>

            <Route path="/all-test" exact>
              {isAuthenticated ? <AllTest /> : <Redirect to="/signin" />}
            </Route>

            <Route path="/new-test" exact>
              {isAuthenticated ? <NewTest /> : <Redirect to="/signin" />}
            </Route>
            <Route path="/account" exact>
              {isAuthenticated ? <Account /> : <Redirect to="/signin" />}
            </Route>
            <Route path="/signup" exact>
              {!isAuthenticated ? <Signup /> : <Redirect to="/" />}
            </Route>
            <Route path="/signin" exact>
              {!isAuthenticated ? <Signin /> : <Redirect to="/" />}
            </Route>
            {/*  */}
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default Main;

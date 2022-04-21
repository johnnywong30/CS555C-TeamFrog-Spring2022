import React, { useEffect } from "react";
import { Redirect, Route, Switch, Router } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import RestrictedRoute from "../components/RestrictedRoute";

import { Auth } from "./Pages/Auth";
import { Home } from "./Pages/Home";
import { Profile } from "./Pages/Profile";
import { Collection } from "./Pages/Collection";
import { Cyclefrog } from "./Pages/Changefrog";
import { Friends } from "./Pages/Friends";
import { Store } from "./Pages/Store";
import { Challenges } from './Pages/Challenges';
import { Random } from './Pages/Random';

const Routes = () => {
	// hook to dispatch actions
	// actions are used to change global state in our app
	const dispatch = useDispatch();
	// hook to just find the current location the user is at route wise
	const location = useLocation();
	const isAuth = useSelector(({ auth }) => auth.auth);

	const redirectHome = () => {
		return <Redirect to={"/froggers"} />;
	};
  const freePaths = ['/', '/login', '/register']
  const restrictedPaths = ['', '/froggers', '/profile', '/collection', '/friends', '/store', '/logout', '/challenges', '/cyclefrogs', '/random']
  if (! isAuth && (restrictedPaths.includes(location.pathname))) {
      return <Redirect to={'/login'} />
  } else if (isAuth && (freePaths.includes(location.pathname))) {
      return <Redirect to={'/froggers'} />
  } 
  return (
      <>
          <Switch>
              <Route exact path="/login" component={Auth} />
              <Route exact path="/" component={Auth} />
              <RestrictedRoute exact path="/logout" component={Auth} />
              <RestrictedRoute exact path="/froggers" component={Home} />
              <RestrictedRoute exact path="/profile" component={Profile} />
              <RestrictedRoute exact path="/collection" component={Collection} />
              <RestrictedRoute exact path="/friends" component={Friends} />
              <RestrictedRoute exact path="/store" component={Store} />
              <RestrictedRoute exact path="/challenges" component={Challenges} />
              <RestrictedRoute exact path="/cyclefrogs" component={Cyclefrog} />
              <RestrictedRoute exact path="/random" component={Random} />
              {/* This last route is to redirect any bad routes to home page if logged in */}
              {/* If not logged in, then redirects to login page */}
              <Route exact path="*" component={redirectHome}/>
          </Switch>
      </>
  )
}

export default Routes;

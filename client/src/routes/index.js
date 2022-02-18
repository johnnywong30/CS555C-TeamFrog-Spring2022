import React, { useEffect } from 'react';
import { Redirect, Route, Switch, Router } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import RestrictedRoute from '../components/RestrictedRoute';

import { Auth } from './Pages/Auth';
import { Home } from './Pages/Home';

const Routes = () => {
    // hook to dispatch actions
    // actions are used to change global state in our app
    const dispatch = useDispatch()
    // hook to just find the current location the user is at route wise 
    const location = useLocation()
    const isAuth = useSelector(({ auth }) => auth.auth)
    console.log(isAuth)
    if (! isAuth && (location.pathname === '' || location.pathname === '/' || location.pathname === '/froggers')) {
        console.log(isAuth)
        return <Redirect to={'/login'} />
    } else if (isAuth && (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register')) {
        console.log(isAuth)
        return <Redirect to={'/froggers'} />
    }
    
    return (
        <>
            <Switch>
                <Route exact path="/login" component={Auth} />
                <Route exact path="/" component={Auth} />
                <RestrictedRoute exact path="/froggers" component={Home} />
            </Switch>
        </>
    )
}

export default Routes;
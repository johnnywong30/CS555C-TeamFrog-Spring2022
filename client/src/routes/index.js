import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Auth } from './Pages/Auth';

const RestrictedRoute = ({component: Component, ...routeProps}) => {
    // const isAuth = useSelector(({ auth }) => auth.authUser)
    const isAuth = false
    return (
        <Route
            {...routeProps}
            render = {(props) => {
                isAuth ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to = {{
                            pathname: '/auth/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }}
        />
    )
}

const Routes = () => {
    // hook to dispatch actions
    // actions are used to change global state in our app
    const dispatch = useDispatch()
    // hook to just find the current location the user is at route wise 
    const location = useLocation()
    // const isAuth = useSelector(({ auth }) => auth.authUser)
    const isAuth = true
    if (! isAuth && (location.pathname === '' || location.pathname === '/')) {
        return <Redirect to={'/'} />
    } else if (! isAuth && (location.pathname === '/' || location.pathname === '/auth/login' || location.pathname === '/auth/register')) {
        return <Redirect to={'/froggers'} />
    }
    return (
        <>
            <Switch>
                <Route path="/" component={Auth} />
                {/* <RestrictedRoute path="/froggers" component */}
            </Switch>
        </>
    )
}

export default Routes;
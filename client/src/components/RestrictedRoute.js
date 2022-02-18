import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const RestrictedRoute = ({ component: Component, appProps, ...rest }) => {
    const isAuth = useSelector(({ auth }) => auth.auth)
    return (
        <Route
            {...rest}
            component={
                isAuth ?
                    Component :
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: appProps.location },
                        }}
                    />

            }
        />
    )
}

export default RestrictedRoute
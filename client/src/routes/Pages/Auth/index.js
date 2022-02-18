import * as React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './Login'
import Register from './Register'

export const Auth = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route component={Login} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
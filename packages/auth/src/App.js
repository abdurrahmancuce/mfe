import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Signin from './components/Signin'
import Signup from './components/Signup'

// It is used to create special class names for the marketing project while creating class names in production.
const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})

export default ({ history }) => {
    return (
        <div>
            <StylesProvider generateClassName={ generateClassName }>
                <Router history={ history }>
                    <Switch>
                        <Route path="/auth/signin" component={Signin} />
                        <Route path="/auth/signup" component={Signup} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Landing from './components/Landing'
import Pricing from './components/Pricing'

// It is used to create special class names for the marketing project while creating class names in production.
const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
})

export default () => {
    return (
        <div>
            <StylesProvider generateClassName={ generateClassName }>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route path="/" component={Landing} />
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    )
}
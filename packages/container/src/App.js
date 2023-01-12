import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

// It is used to create special class names for the marketing project while creating class names in production.
const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={ generateClassName }>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}
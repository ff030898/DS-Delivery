import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import OrderFood from '../pages/Order';

const Routes = () => {
    return (
        <BrowserRouter>
        <Route path= "/" exact component = { Home } />
        <Route path= "/order" exact component = { OrderFood } />
        </BrowserRouter>
    )
}

export default Routes;
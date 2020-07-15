import { Route, BrowserRouter } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes = () => {
    return(
        <BrowserRouter>
        <Route component={Home} path="/" exact/>
        <Route component={CreatePoint} path="/cadastrar" exact/>
        </BrowserRouter>
    )
}

export default Routes;
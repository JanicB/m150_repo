import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { ProductPage } from './pages/ProductPage/ProductPage';

const Routes = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:productId" component={ProductPage} />
        </Switch>
    </main>
)

export default Routes;
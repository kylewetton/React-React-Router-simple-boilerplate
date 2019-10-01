import React from 'react';
import {Switch, Route } from "react-router-dom";
import About from './about';
import Shop from './shop';
import Product from './product';
import Home from './home';

const Main = () => (
    <main>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </main>
)

export default Main
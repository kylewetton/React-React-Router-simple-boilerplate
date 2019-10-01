import React from 'react';
import sc from 'styled-components';
import {Switch, Route } from "react-router-dom";
import ProductList from './productList';
import Product from './product';

export default function shop() {
    return (
        <div>
            <p>Welcome to my shop</p>
             <Switch>
                 <Route exact path="/shop" component={ProductList} />
                 <Route exact path="/shop/:id" component={Product} />
             </Switch>
        </div>
    )
}



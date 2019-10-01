import React from 'react';
import {Link } from "react-router-dom";
import sc from 'styled-components';

const ProductList = () => (
    <div>
        <h1>Product list</h1>
    <ul>
        <li><Link to='/shop/1'>Product 1</Link></li>
        <li><Link to='/shop/2'>Product 2</Link></li>
        <li><Link to='/shop/3'>Product 3</Link></li>
    </ul>

    </div>
)

export default ProductList;
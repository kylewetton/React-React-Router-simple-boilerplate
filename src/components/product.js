import React from 'react';
import {Link } from "react-router-dom";

const Product = ({match}) => {
    return (
    <div>
        <h1>This is product {parseInt(match.params.id)}</h1>
    <hr/>
    <Link to="/shop">Back to shop</Link>
    </div>
    )
}

export default Product;
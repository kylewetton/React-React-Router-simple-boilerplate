import React from 'react';
import sc from 'styled-components';
import {Link } from "react-router-dom";

const Header = () => (
    <HeaderContainer>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        </ul>
</HeaderContainer>
)

const HeaderContainer = sc.div`
  background: #eeeeee;
`

export default Header;
import React from "react";
import { Link } from "react-router-dom";
import "./navigation-bar-styles.scss";

const NavigationBar = () => {   
    return(
        <nav className="navigation-bar">
            <div className="logo">My Store</div>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/about"></Link>
                </li>
                <li>
                    <Link to="/contact"></Link>
                </li>
            </ul>
            <Link className="go-to-cart-button" to="/viewcart">
                Go To Cart
            </Link>
        </nav>
    );
};

export default NavigationBar;
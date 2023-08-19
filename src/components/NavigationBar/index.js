import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navigation-bar-styles.scss";

const NavigationBar = () => {   
    const cartItems = useSelector((state) => state.cart.cartItems);
    
    const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);
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
                Go To Cart ({totalItemsInCart})
            </Link>
        </nav>
    );
};

export default NavigationBar;
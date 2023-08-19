import React from "react";
import { useSelector } from "react-redux";
import "./view-cart-styles.scss";

const ViewCart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems); 

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    return (
        <div className="view-cart">
            <h2 className="cart-heading">
                Your Shopping Cart
            </h2>
            {cartItems.length === 0 ? (
                <p className="empty-cart-message"> Your cart is empty </p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => {
                        return (
                            <div key={item.product.id} className="cart-item">
                                <div className="item-details">
                                    <h3 className="item-name">{item.product.name}</h3>
                                    <p className="item-quantity">Quantity: {item.quantity}</p>
                                    <p className="item-price">Price: ${item.product.price.toFixed(2)}</p>
                                </div>
                            </div>
                        );
                    })}

                    <div className="cart-total">
                        <h3 className="total-heading">Total: </h3>
                        <p className="total-amount">${calculateTotalPrice().toFixed(2)}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewCart;
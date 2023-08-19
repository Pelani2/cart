import React from "react";
import { useSelector } from "react-redux";
import "./view-cart-styles.scss";

const ViewCart = () => {
    const cartItems = useSelector((state) => state.cart.items);

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    return (
        <div className="view-cart">
            <h2>
                Your Shopping Cart
            </h2>
            {cartItems.length === 0 ? (
                <p> Your cart is empty </p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.product.id} className="cart-item">
                            <div className="item-details">
                                <h3>{item.product.name}</h3>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: ${item.product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Total: </h3>
                        <p>${calculateTotalPrice().toFixed(2)}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewCart;
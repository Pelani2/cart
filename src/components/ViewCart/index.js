import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import products from "../../assets/Products"; // Import the updated Products.js file
import "./view-cart-styles.scss";

const ViewCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    const handleRemoveItem = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const productMap = products.reduce((map, product) => {
        map[product.id] = product;
        return map;
    }, {});

    return (
        <div className="view-cart">
            <h2 className="cart-heading">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="empty-cart-message">Your cart is empty</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => {
                        const product = productMap[item.product.id];
                        return (
                            <div key={item.id} className="cart-item">
                                <div className="item-details">
                                    <h3 className="item-name">{product.name}</h3>
                                    <p className="item-quantity">Quantity: {item.quantity}</p>
                                    <p className="item-price">Price: ${product.price.toFixed(2)}</p>
                                    <button
                                        className="remove-button"
                                        onClick={() => handleRemoveItem(item.product.id)}
                                    >
                                        Remove
                                    </button>
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
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import products from "../../assets/Products"; 
import "./view-cart-styles.scss";

const ViewCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);

    const [itemQuantities, setItemQuantities] = useState(
        Object.fromEntries(cartItems.map((item) => [item.product.id, item.quantity]))
    );

    const calculateItemPrice = (productId) => {
        const item = cartItems.find((item) => item.product.id === productId);
        return item.product.price * itemQuantities[productId];
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + calculateItemPrice(item.product.id), 0);
    };

    const handleRemoveItem = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleChangeQuantity = (productId, quantity) => {
        setItemQuantities((prevQuantities) => ({
            ...prevQuantities, 
            [productId]: quantity,
        }));
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
                        const itemPrice = calculateItemPrice(item.product.id);
                        return (
                            <div key={item.id} className="cart-item">
                                <div className="item-details">
                                    <h3 className="item-name">{product.name}</h3>
                                    <p className="item-quantity">
                                        Quantity: {" "}
                                        <input 
                                            type="number"
                                            value={itemQuantities[item.product.id]}
                                            onChange={(e) => handleChangeQuantity(item.product.id, parseInt(e.target.value))}
                                            min={1}
                                        />
                                    </p>
                                    <p className="item-price">Price: ${itemPrice.toFixed(2)}</p>
                                </div>
                                <img src={product.image} alt={product.name} className="item-image" />
                                <button
                                        className="remove-button"
                                        onClick={() => handleRemoveItem(item.product.id)}
                                    >
                                        Remove
                                    </button>
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
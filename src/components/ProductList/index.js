import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import products from "../../assets/Products";
import "./product-list-styles.scss";

const ProductList = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="product__list">
            {products.map((product) => (
                <div key={product.id} className="product__item">
                    <img src={product.image} alt={product.name} className="product__image" />
                    <h3 className="product__name">
                        {product.name}
                    </h3>
                    <p className="product__price">
                        Price: ${product.price.toFixed(2)}
                    </p>
                    <p className="product__description">
                        Description: {product.description}
                    </p>
                    <p className="product__origin">
                       Origin: {product.origin}
                    </p>
                    <p className="product__release-date">
                        Release date: {product.releaseDate}
                    </p>
                    <button onClick={handleAddToCart(product)} className="product__add-button">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ProductList;
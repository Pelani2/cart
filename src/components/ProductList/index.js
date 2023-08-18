import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import products from "../../assets/Products";
import SearchAndFilters from "../SearchAndFilters";
import "./product-list-styles.scss";

const ProductList = () => {
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(products);

    const uniqueCategories = [...new Set(products.map((product) => product.category))];

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const handleSearch = (keyword) => {
        const filtered = products.filter((product) => 
            product.name.toLowerCase().includes(keyword.toLowerCase())
        );
        
        if (selectedCategory) {
            const categoryFiltered = filtered.filter((product) => product.category.toLowerCase() === selectedCategory.toLowerCase());
            setFilteredProducts(categoryFiltered);
        } else {
            setFilteredProducts(filtered);
        }
    };

    const handleFilter = (filterType, filterValue) => {
        setSelectedCategory(filterValue);
        if (filterValue) {
            const categoryFiltered = products.filter((product) => product.category.toLowerCase() === filterValue.toLowerCase());
            setFilteredProducts(categoryFiltered);
        } else {
            setFilteredProducts(products); 
        }
    };

    return (
        <div className="product__list">
            <SearchAndFilters 
                handleSearch={handleSearch}
                handleFilter={handleFilter}
                categories={uniqueCategories}
            />
            {filteredProducts.map((product) => (
                <div key={product.id} className="product__item">
                    <img src={product.image} alt={product.name} className="product__image" />
                    <h3 className="product__name">
                        {product.name}
                    </h3>
                    <p className="product__price">
                        ${product.price.toFixed(2)}
                    </p>
                    <p className="product__description">
                        {product.description}
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
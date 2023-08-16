import React from "react";
import ProductList from "../../components/ProductList";
import "./home-styles.scss";

const Home = () => {
    return(
        <div className="home">
            <h1 className="home__title">
                Product List
            </h1>
            <ProductList />
        </div>
    );
};

export default Home;
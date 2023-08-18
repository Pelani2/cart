import React from "react";
import ProductList from "../../components/ProductList";
import "./home-styles.scss";

const Home = () => {
    return(
        <div className="home">
            <ProductList />
        </div>
    );
};

export default Home;
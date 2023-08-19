import React from "react";
import ProductList from "../../components/ProductList";
import NavigationBar from "../../components/NavigationBar";
import "./home-styles.scss";

const Home = () => {
    return(
        <div className="home">
            <NavigationBar />
            <ProductList />
        </div>
    );
};

export default Home;
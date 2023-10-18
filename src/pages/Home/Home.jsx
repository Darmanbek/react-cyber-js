import React from "react";
import { Header, Category, Search, Products } from "../../components";
import "./home.scss";

const Home = () => {
    return (
        <>
            <Header />
            <Search />
            <Category />
            <Products />
        </>
    );
}

export default Home;
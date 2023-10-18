import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import RequireAdmin from './RequireAdmin';
import { Home } from "./pages";
import { categories, locations } from "./data";
import { getCategories } from "./store/categorySlice/categories";
import { getLocations } from "./store/locationSlice/locations";
import { getProducts } from "./store/productSlice/products";
import "./styles/app.scss";



const App = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isUser, setIsUser] = useState(false);

    const getApi = () => {
        dispatch(getLocations(locations));
        dispatch(getCategories(categories));
        dispatch(getProducts());
    }
    

    useEffect(() => {
        if (isUser) {
            navigate("/")
        }
    }, [isUser])

    useEffect(() => {
        getApi();
    }, [dispatch])
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={
                    <RequireAdmin
                    isAdmin={isAdmin} 
                    setIsAdmin={setIsAdmin}
                    setIsUser={setIsUser}
                    />
                } />
            </Routes>
        </div>
    );
}

export default App;
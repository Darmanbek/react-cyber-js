import React, { useEffect, useState } from "react";
import { Button } from "antd";
import ModalCategory from "../ModalComponent/ModalCategory/ModalCategory";
import CategoryBlock from "./CategoryBlock/CategoryBlock";
import { setCategoryValue, setRouterValue, setVisibleCategory } from "../../store/categorySlice/categories";
import { getCategoriesProducts } from "../../store/productSlice/products";
import { useDispatch } from "react-redux";
import "./category.scss";

const Category = () => {
    const dispatch = useDispatch();
    const [selectSearchCategory, setSelectSearchCategory] = useState("")

    const showModal = () => {
        dispatch(setVisibleCategory(true));
        dispatch(setRouterValue(true));
        dispatch(setCategoryValue(false));
    }

    
    useEffect(() => {
        dispatch(getCategoriesProducts(selectSearchCategory))
    }, [selectSearchCategory])
    return (
        <section className="section-category">
            <div className="container">
                <div className="category-inner">

                    <div className="category-inner__head">
                        <h1 className="category-head__title">Категорий{selectSearchCategory && `: ${selectSearchCategory}`}</h1>
                        <div className="category-head__btns">
                            <Button className="category-head___btn" onClick={showModal}>Посмотреть все</Button>
                            <Button className="category-head___btn" onClick={() => setSelectSearchCategory("")}>Отменить все</Button>
                        </div>
                    </div>
                    <ModalCategory setSelectSearchCategory={setSelectSearchCategory} />
                    <CategoryBlock setSelectSearchCategory={setSelectSearchCategory}/>
                </div>
            </div>
        </section>
    );
}

export default Category;
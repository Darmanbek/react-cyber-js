import React from "react";
import { useSelector } from "react-redux";
import "./categoryBlock.scss";

const CategoryBlock = ({ setSelectSearchCategory }) => {
    const { categories } = useSelector(state => state.categories);
    
    const selectCategory = (categoryName) => {
        setSelectSearchCategory(categoryName)
    }
    return (
        <div className="category-block">

            <div className="category-block-inner">

                { categories && categories.map(category => (
                    <div className="category-block-inner__item" key={category.id}>

                        <div className="category-content" onClick={() => selectCategory(category.name_ru)}> 
                            <div style={{background: category.bg}} className="category-content__block">
                                <img src={category.image} alt={category.image} />
                            </div>

                            <div className="category-content__title">
                                <span>{category.name_ru}</span>
                            </div>

                        </div>

                    </div>
                ))}

            </div>
            
        </div>
    );
}

export default CategoryBlock;
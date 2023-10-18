import React from 'react';
import ProductBlock from './ProductBlock/ProductBlock';
import "./products.scss";
import { useSelector } from 'react-redux';
import SkeletionProduct from '../SkeletonComponents/SkeletonProduct/SkeletionProduct';

const Products = () => {
    const { products, loading, error } = useSelector(state => state.products)


    let array = [1, 2, 3, 4, 5, 6]
    return (
        <section className="section-products">
            <div className="container">
                <div className="products-list-block">
                    {loading === "pending" && array.map(i => (
                        <SkeletionProduct key={i} />
                    ))}
                    {error && (<h1>{error}</h1>)}
                    {
                        products.length > 0 && products.map(product => (
                            <ProductBlock 
                            key={product.id}
                            product={product}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Products;
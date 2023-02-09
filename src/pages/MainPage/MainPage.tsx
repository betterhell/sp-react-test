import React, {useEffect} from 'react';
import Products from "../../components/Products/Products";
import styles from "./MainPage.module.scss"
import {Route, Routes} from "react-router-dom"
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import Basket from "../../components/Basket/Basket";
import {useProductsStore} from "../../store/products.store";

const MainPage = () => {
    const {getAllProducts} = useProductsStore()

    useEffect(() => {
        getAllProducts()
    }, [getAllProducts])

    return (
        <div className={styles.mainPage}>
            <Routes>
                <Route path="/" element={<Products />}/>
                <Route path="/:id" element={<ProductInfo />} />
            </Routes>
            <Basket />
        </div>
    );
};

export default MainPage;
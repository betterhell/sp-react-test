import React, {useEffect, useState} from 'react';
import Products from "../../components/Products/Products";
import productList from "../../data/productList";
import styles from "./MainPage.module.scss"
import {Route, Routes, useParams} from "react-router-dom"
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import Basket from "../../components/Basket/Basket";
import {useBasketStore} from "../../store/basket.store";
import {useProductStore} from "../../store/product.store";

const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <Routes>
                <Route path="/" element={<Products products={productList} />}/>
                <Route path="/:id" element={<ProductInfo />} />
            </Routes>
            <Basket />
        </div>
    );
};

export default MainPage;
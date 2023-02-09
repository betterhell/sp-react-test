import React, {FC, useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import styles from "./ProductInfo.module.scss"
import {useBasketStore} from "../../store/basket.store";
// @ts-ignore
import {ReactComponent as Cart} from "../../assets/icons/CartIcon.svg"
import {useProductStore} from "../../store/product.store";
import productList from "../../data/productList";
import {IProduct} from "../../types/product";

const ProductInfo = () => {
    const {addToCart} = useBasketStore()
    const {currentProduct, getCurrentProduct} = useProductStore()

    const {id} = useParams()

    useEffect(() => {
        if (id) {
            getCurrentProduct(id)
        }
    }, [id])

    console.log(currentProduct)

    return (
        <div className={styles.productInfo}>
            <div className={styles.productInfo__desc}>
                <NavLink to="/">
                    <button className={styles.productInfo__backBtn}>Back in catalog</button>
                </NavLink>
                <div className={styles.productInfo__image}>
                    <img src={currentProduct?.image} alt={currentProduct?.title}/>
                </div>
                <h1>{currentProduct?.title}</h1>
                <p>{currentProduct?.description}</p>
                <div className={styles.productInfo__buy}>
                    <button className={styles.productInfo__addToCart} onClick={() => addToCart(currentProduct)}><Cart /></button>
                    <p>$ {currentProduct?.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
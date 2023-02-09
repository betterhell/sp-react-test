import React, {FC} from 'react';
import styles from "./Card.module.scss"
// @ts-ignore
import {ReactComponent as Cart} from "../../assets/icons/CartIcon.svg"
import {IProduct} from "../../types/product";

import {useBasketStore} from "../../store/basket.store";
import {NavLink} from "react-router-dom";

interface CardProps {
    product: IProduct
}

const Card: FC<CardProps> = ({product}) => {
    const {addToCart} = useBasketStore()

    return (
        <div className={styles.card}>
            <NavLink to={product.id}>
                <img src={product.image} alt={product.title}/>
                <h1>{product.title}</h1>
            </NavLink>
            <div className={styles.card__interactions}>
                <button onClick={() => addToCart(product)}><Cart /></button>
                <p>$ {product.price}</p>
            </div>
        </div>
    );
};

export default Card;
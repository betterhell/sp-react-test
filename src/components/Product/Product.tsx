import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./Product.module.scss";
import { useBasketStore } from "../../store/basket.store";
import { ReactComponent as Cart } from "../../assets/icons/CartIcon.svg";
import { useProductStore } from "../../store/product.store";
import { priceWithSpace } from "../../utils/price";

const Product = () => {
  const { addToCart } = useBasketStore();
  const { currentProduct, getCurrentProduct } = useProductStore();

  const { id } = useParams();

  useEffect(() => {
    getCurrentProduct(Number(id));
  }, [id]);

  return (
    <div className={styles.product}>
      <div className={styles.product__desc}>
        <NavLink to="/">
          <button className={styles.product__backBtn}>Back in catalog</button>
        </NavLink>
        <div className={styles.product__image}>
          <img src={currentProduct?.image} alt={currentProduct?.title} />
        </div>
        <h1>{currentProduct?.title}</h1>
        <p>{currentProduct?.description}</p>
        <div className={styles.product__buy}>
          <button
            className={styles.product__addToCart}
            onClick={() => addToCart(currentProduct!)}
          >
            <Cart />
          </button>
          <p>$ {priceWithSpace(currentProduct?.price!)}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;

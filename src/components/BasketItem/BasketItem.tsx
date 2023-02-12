import React, { FC } from "react";
import styles from "./BasketItem.module.scss";

import { ReactComponent as DecreaseIcon } from "../../assets/icons/DecreaseIcon.svg";
import { ReactComponent as IncreaseIcon } from "../../assets/icons/IncreaseIcon.svg";
import { ReactComponent as RemoveIcon } from "../../assets/icons/RemoveIcon.svg";

import { useBasketStore } from "../../store/basket.store";
import { IProduct } from "../../types/product";
import { priceWithSpace } from "../../utils/price";

interface BasketItemProps {
  product: IProduct;
  count: number;
}

const BasketItem: FC<BasketItemProps> = ({ product, count }) => {
  const { deleteFromCart, increaseItemCount, decreaseItemCount } =
    useBasketStore();

  return (
    <div className={styles.basketItem}>
      <img src={product.image} alt={product.title} />

      <div className={styles.basketItem__info}>
        <h3>{product.title}</h3>

        <div className={styles.basketItem__countPrice}>
          <div className={styles.basketItem__buttons}>
            <button onClick={() => decreaseItemCount(product.id)}>
              <DecreaseIcon />
            </button>
            <p>{count}</p>
            <button onClick={() => increaseItemCount(product.id)}>
              <IncreaseIcon />
            </button>
          </div>

          <div className={styles.basketItem__price}>
            <p>$ {priceWithSpace(product.price)}</p>
          </div>
        </div>

        <div className={styles.basketItem__removeBtn}>
          <button onClick={() => deleteFromCart(product.id)}>
            <RemoveIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;

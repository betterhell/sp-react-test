import React, { useMemo } from "react";
import styles from "./Basket.module.scss";

import BasketItem from "../BasketItem/BasketItem";
import { useBasketStore } from "../../store/basket.store";

import { getPrice, getPriceOfCart, priceWithSpace } from "../../utils/price";

const Basket = () => {
  const { items, isOpen } = useBasketStore();

  const totalPrice = useMemo(() => getPriceOfCart(items), [items]);
  const subtotal = useMemo(() => getPrice(items), [items]);

  return (
    <>
      {isOpen && items.length > 0 ? (
        <div className={styles.basket_open}>
          <div className={styles.basket_sticky}>
            <div
              className={
                items.length > 2
                  ? `${styles.basket__items} ${styles.basket__overflow}`
                  : `${styles.basket__items}`
              }
            >
              <h1>My basket</h1>

              {items.map((item) => (
                <BasketItem
                  key={item.product.id}
                  product={item.product}
                  count={item.count}
                />
              ))}
            </div>

            <div className={styles.basket__price}>
              <div className={styles.basket__price_subtotal}>
                <p>Subtotal</p>
                <p>$ {priceWithSpace(subtotal)}</p>
              </div>

              <div className={styles.basket__price_tax}>
                <p>Tax</p>
                <p>$ 100</p>
              </div>

              <div className={styles.basket__price_shipping}>
                <p>Shipping</p>
                <p>$ 150</p>
              </div>

              <div className={styles.basket__price_totalPrice}>
                <p>Total</p>
                <p>$ {priceWithSpace(totalPrice)}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.basket_close}></div>
      )}
    </>
  );
};

export default Basket;

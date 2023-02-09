import React, {FC, useMemo} from 'react';
import styles from "./Basket.module.scss"
import BasketItem from "../BasketItem/BasketItem";
import {useBasketStore} from "../../store/basket.store";

import {getPrice, getPriceOfCart} from "../../utils/price";

const Basket: FC = () => {
    const { items } = useBasketStore()

    const totalPrice = useMemo(() => getPriceOfCart(items), [items]);
    const subtotal = useMemo(() => getPrice(items), [items]);

    return (
        <div className={styles.basket}>
           <div className={styles.basket__items}>
              <h1>My basket</h1>
                {items.map((item) => <BasketItem key={item.product.id} product={item.product} count={item.count}/>)}
           </div>
           <div className={styles.basket__totalPrice}>
               <div>
                   <p>Subtotal</p>
                   <p>$ {subtotal}</p>
               </div>
               <div>
                   <p>Tax</p>
                   <p>$ 100</p>
               </div>
               <div>
                   <p>Shipping</p>
                   <p>$ 150</p>
               </div>
               <div>
                   <p>Total</p>
                   <p>$ {totalPrice}</p>
               </div>
           </div>
        </div>
    );
};

export default Basket;
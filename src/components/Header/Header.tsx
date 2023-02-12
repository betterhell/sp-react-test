import React, { useMemo } from "react";
import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/logo/Logo.svg";
import { ReactComponent as Cart } from "../../assets/icons/CartIcon.svg";

import { NavLink } from "react-router-dom";
import { useBasketStore } from "../../store/basket.store";
import { basketCounter } from "../../utils/basketCounter";

const Header = () => {
  const { items, toggleCart } = useBasketStore();

  const productCount = useMemo(() => basketCounter(items), [items]);

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
      <div className={styles.header__cart}>
        <button onClick={() => toggleCart()}>
          <Cart />
        </button>
        <div className={styles.header__cart_counter}>{productCount}</div>
      </div>
    </div>
  );
};

export default Header;

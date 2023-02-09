import React, {useState} from 'react';
import styles from "./Header.module.scss"
// @ts-ignore
import {ReactComponent as Logo } from "../../assets/logo/Logo.svg"
// @ts-ignore
import {ReactComponent as Cart} from "../../assets/icons/CartIcon.svg"
import {NavLink} from "react-router-dom";
import {useBasketStore} from "../../store/basket.store";


const Header = () => {
    const {items} = useBasketStore()

    return (
        <div className={styles.header}>
            <div className={styles.header__logo}>
                <NavLink to="/"><Logo /></NavLink>
            </div>

            <div className={styles.header__cart}>
                <button><Cart /></button>
                <div className={styles.header__cart_counter}>{items?.length}</div>
            </div>
        </div>
    );
};

export default Header;
import React from "react";
import styles from "./MainPage.module.scss";
import { Route, Routes } from "react-router-dom";

import Products from "../../components/Products/Products";
import Product from "../../components/Product/Product";
import Basket from "../../components/Basket/Basket";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Basket />
    </div>
  );
};

export default MainPage;

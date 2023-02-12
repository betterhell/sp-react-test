import React, { useEffect } from "react";
import styles from "./Products.module.scss";

import Card from "../Card/Card";
import { useProductsStore } from "../../store/products.store";

const Products = () => {
  const { products } = useProductsStore();
  const { getAllProducts } = useProductsStore();

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <div className={styles.products__basket}>
      {products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;

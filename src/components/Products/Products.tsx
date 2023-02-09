import React from 'react';
import styles from "./Products.module.scss"

import Card from "../Card/Card";
import {useProductsStore} from "../../store/products.store";

const Products= () => {
    const {products} = useProductsStore()

    return (
        <div className={styles.products}>
            {products?.map((product) =>
                <Card key={product.id} product={product}/>
            )}
        </div>
    );
};

export default Products

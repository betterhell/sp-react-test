import React from 'react';
import styles from "./Products.module.scss"

import {IProduct} from "../../types/product";
import {IProducts} from "../../types/products";
import Card from "../Card/Card";

const Products: React.FC<IProducts> = ({products}) => {

    return (
        <div className={styles.products}>
            {products?.map((product) =>
                <Card key={product.id} product={product}/>
            )}
        </div>
    );
};

export default Products

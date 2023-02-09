import { v4 as uuidv4 } from 'uuid'

import ShoesImg1 from "../assets/cards/cm996shb_nb_02_i 1.png"
import ShoesImg2 from "../assets/cards/cm996shb_nb_02_i 1 (1).png"
import ShoesImg3 from "../assets/cards/cm996shb_nb_02_i 1 (2).png"
import ShoesImg4 from "../assets/cards/cm996shb_nb_02_i 1 (3).png"
import ShoesImg5 from "../assets/cards/cm996shb_nb_02_i 1 (4).png"
import ShoesImg6 from "../assets/cards/cm996shb_nb_02_i 1 (5).png"
import {IProduct} from "../types/product";

export const productList: IProduct[] = [
    {
        id: uuidv4(),
        title: "New Balance 574 Vintage Brights",
        price: 650,
        description: "Item model number: MT91547",
        image: ShoesImg1
    },
    {
        id: uuidv4(),
        title: "New Balance Made in UK 920 Chinese New Year",
        price: 1200,
        description: "Item model number: MT915127",
        image: ShoesImg2
    },
    {
        id: uuidv4(),
        title: "New Balance 373 Modern Classics",
        price: 800,
        description: "Item model number: MT91SAD547",
        image: ShoesImg3
    },
    {
        id: uuidv4(),
        title: "New Balance Made in UK 670 Chinese New Year",
        price: 780,
        description: "Item model number: MT91ASDSA547",
        image: ShoesImg4
    },
    {
        id: uuidv4(),
        title: "New Balance X-Racer Utility",
        price: 1000,
        description: "Item model number: MT911251547",
        image: ShoesImg5
    },
    {
        id: uuidv4(),
        title: "New Balance 5740 Think Colorfully",
        price: 940,
        description: "Item model number: MT919567SA547",
        image: ShoesImg6
    }
]

export default productList;
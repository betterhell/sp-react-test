export interface ProductState {
    currentProduct: IProduct | null;
    getCurrentProduct: (id: number) => void;
}

export interface IProduct {
    id: number,
    title: string;
    price: number;
    description: string;
    image: string;
}
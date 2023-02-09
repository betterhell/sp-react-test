export interface ProductState {
    currentProduct: IProduct | null
    getCurrentProduct: (productId: string) => void;
}

export interface IProduct {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
}
import {productList} from "../db/db";
import {Product} from "../models/product.model";

export const saveProduct = (product:Product):Product =>{
    productList.push(product);
    return product
}
export const getAllProducts = (): Product[] => {
    return productList;
};

export const getProductById = (id: number): Product | undefined => {
    return productList.find(product => product.id === id);
};

export const updateProduct = (id: number, data: Partial<Product>): Product | null => {
    const product = productList.find(p => p.id === id);
    if (!product) return null;

    Object.assign(product, data);
    return product;
};

export const deleteProduct = (id: number): boolean => {
    const index = productList.findIndex(product => product.id === id);
    if (index === -1) return false;

    productList.splice(index, 1);
    return true;
};

export const validateProduct = (product: Product): string | null => {
    if (!product.id || !product.name || !product.price || !product.currency || !product.image) {
        return 'All fields are required.';
    }
    return null;
};
import {Request,Response} from "express";
import * as productService from "../service/product.service";

//controller method to save new product
export const saveProduct = (req:Request,res:Response) => {
    try{
        const newProduct = req.body;
        const validationError = productService.validateProduct(newProduct);
        if(validationError){
            res.status(400).json({error:validationError});
            return;
        }
        const savedProduct = productService.saveProduct(newProduct);
        res.status(201).json(savedProduct);
    }catch(error){
        console.log(error)
        res.status(500).json({error:"Something went wrong"});
    }
}

//controller method to get all products
export const getAllProducts = (req:Request,res:Response) => {
    try{
        const products = productService.getAllProducts();
        res.status(200).json(products);
    }catch (error){
        console.log(error)
        res.status(500).json({error:"Something went wrong"});
    }
}

//controller method to get product by id
export const getProductById = (req:Request,res:Response) => {
    try{
        const productId = parseInt(req.params.id);
        if(isNaN(productId)){
            res.status(400).json({error:"Invalid product id"});
            return;
        }
        const product = productService.getProductById(productId);
        if(!product){
            res.status(404).json({error:"Product not found"});
            return;
        }
        res.status(200).json(product);
    }catch (error){
        console.log(error)
        res.status(500).json({error:"Something went wrong"});
    }
}

//controller method to update product by id
export const updateProduct = (req:Request,res:Response) => {
    try {
        const productId = parseInt(req.params.id);
        if(isNaN(productId)){
            res.status(400).json({error:"Invalid product id"});
            return;
        }
        const updatedData = req.body;
        const updatedProduct = productService.updateProduct(productId,updatedData);
        if(!updatedProduct){
            res.status(404).json({error:"Product not found"});
            return;
        }
        res.status(200).json(updatedProduct);
    }catch (error){
        console.log(error)
        res.status(500).json({error:"Something went wrong"});
    }
}

//controller method to delete product by id
export const deleteProduct = (req:Request,res:Response) => {
    try {
        const productId = parseInt(req.params.id);
        if(isNaN(productId)){
            res.status(400).json({error:"Invalid product id"});
            return;
        }
        const deleted = productService.deleteProduct(productId);
        if (!deleted) {
            res.status(404).json({ error: "Product not found" });
            return;
        }
        res.status(200).json({ message: "Product deleted successfully" });
    }catch (error){
        console.log(error)
        res.status(500).json({error:"Something went wrong"});
    }
}
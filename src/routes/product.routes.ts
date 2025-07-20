import {Router} from "express";
import {
    deleteProduct,
    getAllProducts,
    getProductById,
    saveProduct,
    updateProduct
} from "../controller/product.controller";
import {authorizeRoles} from "../middleware/auth.middleware";

const productRouter:Router = Router();

productRouter.get("/all",getAllProducts);
productRouter.post("/save",authorizeRoles("admin"),saveProduct);
productRouter.get("/:id",getProductById);
productRouter.put("/update/:id",authorizeRoles("admin"),updateProduct);
productRouter.delete("/delete/:id",authorizeRoles("admin"),deleteProduct);

export default productRouter
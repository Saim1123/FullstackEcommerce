import { Router } from "express";
import { createProduct, getProductById, listProduct, updateProduct, deleteProduct } from "./productsController";

const router = Router();

router.get("/", listProduct);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;

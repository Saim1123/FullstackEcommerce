import { Router } from "express";

import { createProduct, getProductById, listProduct, updateProduct, deleteProduct } from "./productsController";
import { validateData } from "../../middlewares/validationMiddleware";
import { createProductSchema, updateProductSchema } from "../../db/productsSchema";

const router = Router();

router.get("/", listProduct);
router.get("/:id", getProductById);
router.post("/", validateData(createProductSchema), createProduct);
router.put("/:id", validateData(updateProductSchema), updateProduct);
router.delete("/:id", deleteProduct);

export default router;

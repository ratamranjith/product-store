import express from "express";
import Product from "../models/product.model.js";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controller/product.controller.js";
const router = express.Router();

router.get("/", getProducts)
router.post("/", createProduct)
router.patch("/:id", updateProduct)
router.delete("/:id", deleteProduct)
export default router;
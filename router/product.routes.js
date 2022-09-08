import express from 'express';
const router = express.Router();

import { getAllProduct, getProductById, getProductByCategoryId, addProduct, addCategory, updateProductbyId, updateCategorybyId, getAllCategory, addImg, addImgByProductId } from '../controllers/product.controller.js';

// GET
router.get("/", getAllProduct);
router.get("/category/:id", getProductByCategoryId);
router.get("/category", getAllCategory);
router.get("/:id", getProductById);

// POST
router.post("/addProduct", addProduct);
router.post("/addCategory", addCategory);
router.put("/updateProduct/:id", updateProductbyId);
router.post("/addImg", addImg);

// PUT
router.put("/updateCategory/:id", updateCategorybyId);
router.put("/updateImg/:id", addImgByProductId);

export default router;
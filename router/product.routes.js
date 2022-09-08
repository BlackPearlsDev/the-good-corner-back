import express from 'express';
const router = express.Router();

import { getAllProduct, getProductById, getProductByCategoryId, addProduct, addCategory, updateProductbyId, updateCategorybyId, getAllCategory, addImg, addImgByProductId } from '../controllers/product.controller.js';

// ici on est sur l'url http://localhost:9000/
router.get("/", getAllProduct);
router.get("/category/:id", getProductByCategoryId);
router.post("/addProduct", addProduct);
router.post("/addCategory", addCategory);
router.put("/updateProduct/:id", updateProductbyId);
router.put("/updateCategory/:id", updateCategorybyId);
router.get("/category", getAllCategory);
router.post("/addImg", addImg);
router.put("/updateImg/:id", addImgByProductId);
router.get("/:id", getProductById);

export default router;
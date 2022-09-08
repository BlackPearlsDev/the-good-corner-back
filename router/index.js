import express from 'express';
const router = express.Router();

import productRoutes from './product.routes.js';
import userRoutes from './user.routes.js';

router.use('/api/v1/product', productRoutes);
router.use('/api/v1/user', userRoutes);

export default router;
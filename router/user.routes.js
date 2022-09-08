import express from 'express';
const router = express.Router();

import { getAllUser, addUser, getUserByUuid, updateUserbyUuid } from '../controllers/user.controller.js';

// GET
router.get("/", getAllUser);
router.get("/:uuid", getUserByUuid);

// POST
router.post("/", addUser);

// PUT
router.put("/updateUser/:uuid", updateUserbyUuid);

export default router;
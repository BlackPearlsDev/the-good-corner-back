import express from 'express';
const router = express.Router();

import { getAllUser, addUser, getUserByUuid, updateUserbyUuid } from '../controllers/user.controller.js';

// ici on est sur l'url http://localhost:9000/
router.get("/", getAllUser);
router.post("/", addUser);
router.get("/:uuid", getUserByUuid);
router.put("/updateUser/:uuid", updateUserbyUuid);

export default router;
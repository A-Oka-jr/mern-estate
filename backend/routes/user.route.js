import express from "express";
import {
  updateUser,
  deleteUser,
  getUserListings,
  getUserById,
} from "../controllers/user.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

router.put("/update/:id", verifyUser, updateUser);

router.delete("/delete/:id", verifyUser, deleteUser);

router.get("/listings/:id", verifyUser, getUserListings);

router.get("/:id", verifyUser, getUserById);

export default router;

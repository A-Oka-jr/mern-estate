import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import {
  getListingById,
  createListing,
  deleteListing,
  updateListing,
  getListings,
} from "../controllers/listing.controller.js";

const router = express.Router();
router.get("/get/:id", getListingById);
router.post("/create", verifyUser, createListing);
router.delete("/delete/:id", verifyUser, deleteListing);
router.put("/update/:id", verifyUser, updateListing);
router.get("/get", getListings);

export default router;

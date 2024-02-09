import listingService from "../services/listing.services.js";

export const createListing = async (req, res, next) => {
  try {
    let listing = await listingService.createListing(req.body);
    return res.status(201).json({ success: true, listing });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

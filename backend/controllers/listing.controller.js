import listingService from "../services/listing.services.js";
import errorHandler from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    let listing = await listingService.createListing(req.body);
    return res.status(201).json({ success: true, listing });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  try {
    const listing = await listingService.findById(req.params.id);

    if (!listing) return next(errorHandler(404, "Listing not found"));

    if (req.user.id !== listing.userRef)
      return next(
        errorHandler(401, "Unauthorized! you can only delete your own listing")
      );

    let result = await listingService.deleteListing(req.params.id);
    return res.status(200).json("Listing has been deleted successfully");
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

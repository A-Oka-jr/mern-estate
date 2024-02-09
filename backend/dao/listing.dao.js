import Listing from "../models/listing.model.js";

const listingDao = {};

listingDao.createListing = async (data) => {
  let listing = await Listing.create(data);
  return listing;
};

export default listingDao;

import Listing from "../models/listing.model.js";

const listingDao = {};

listingDao.createListing = async (data) => {
  let listing = await Listing.create(data);
  return listing;
};

listingDao.getUserListings = async (userId) => {
  let userListings = await Listing.find({ userRef: userId });
  return userListings;
};

export default listingDao;

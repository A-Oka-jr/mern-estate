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

listingDao.deleteListing = async (id) => {
  let listing = await Listing.findByIdAndDelete(id);
  return listing;
};

listingDao.findById = async (id) => {
  let listing = await Listing.findById(id);
  return listing;
};

listingDao.updateListing = async (id, data) => {
  let listing = await Listing.findByIdAndUpdate(id, data, { new: true });
  return listing;
};

export default listingDao;

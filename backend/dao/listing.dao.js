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

listingDao.getListings = async (query) => {
  const limit = parseInt(query.limit) || 10;
  const startIndex = parseInt(query.startIndex) || 0;
  const searchTerm = query.searchTerm || "";
  const sort = query.sort || "createdAt";
  const order = query.order || "desc";
  let offer = query.offer;
  let furnished = query.furnished;
  let parking = query.parking;
  let type = query.type;

  if (offer === undefined || offer === "false") {
    offer = { $in: [false, true] };
  }

  if (furnished === undefined || furnished === "false") {
    furnished = { $in: [false, true] };
  }

  if (parking === undefined || parking === "false") {
    parking = { $in: [false, true] };
  }

  if (type === undefined || type === "all") {
    type = { $in: ["sale", "rent"] };
  }
  let listings = await Listing.find({
    name: { $regex: searchTerm, $options: "i" },
    offer: offer,
    furnished: furnished,
    parking: parking,
    type: type,
  })
    .sort({ [sort]: order })
    .limit(limit)
    .skip(startIndex);
  return listings;
};

export default listingDao;

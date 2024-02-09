import listingDao from "../dao/listing.dao.js";
const listingService = {};

listingService.createListing = async (data) => {
  return await listingDao.createListing(data);
};

export default listingService;

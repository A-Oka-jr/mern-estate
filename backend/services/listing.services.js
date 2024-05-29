import listingDao from "../dao/listing.dao.js";
const listingService = {};

listingService.createListing = async (data) => {
  return await listingDao.createListing(data);
};

listingService.findById = async (id) => {
  return await listingDao.findById(id);
};
listingService.deleteListing = async (id) => {
  return await listingDao.deleteListing(id);
};

listingService.updateListing = async (id, data) => {
  return await listingDao.updateListing(id, data);
};
export default listingService;

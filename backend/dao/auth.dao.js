import User from "../models/user.model.js";
const authDao = {};

authDao.signup = async (username, email, password) => {
  let result = await User.create({ username, email, password });
  return result;
};

authDao.getUserByEmail = async (email) => {
  let user = await User.findOne({ email });
  return user;
};

export default authDao;

import User from "../models/user.model.js";
const authDao = {};

authDao.signup = async (username, email, password) => {
  let result = await User.create({ username, email, password });
  return result;
};

export default authDao;

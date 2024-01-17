import User from "../models/user.model.js";
const authDao = {};

authDao.signup = async (username, email, password, avatar) => {
  if (!avatar) {
    avatar =
      "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg";
  }
  let result = await User.create({ username, email, password, avatar });
  return result;
};

authDao.getUserByEmail = async (email) => {
  let user = await User.findOne({ email });
  return user;
};

export default authDao;

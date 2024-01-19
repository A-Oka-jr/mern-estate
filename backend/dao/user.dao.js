import User from "../models/user.model.js";

const userDao = {};

userDao.updateUser = async (id, data) => {
  const user = await User.findByIdAndUpdate(
    id,
    {
      $set: {
        username: data.username,
        email: data.email,
        password: data.password,
        avatar: data.avatar,
      },
    },
    { new: true }
  );
  return user;
};

export default userDao;

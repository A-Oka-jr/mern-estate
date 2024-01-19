import bcryptjs from "bcryptjs";
import userDao from "../dao/user.dao.js";

const userService = {};

userService.updateUser = async (id, user) => {
  try {
    if (user.password) {
      user.password = await bcryptjs.hashSync(user.password, 7);
    }
    const updatedUser = await userDao.updateUser(id, user);

    const { password, ...rest } = updatedUser._doc;

    return rest;
  } catch (error) {
    console.log(error.message);
    throw error; // Rethrow the error to be caught by the controller
  }
};
export default userService;

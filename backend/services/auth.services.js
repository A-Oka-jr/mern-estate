import authDao from "../dao/auth.dao.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import errorHandler from "../utils/error.js";

const authService = {};
authService.signup = async (username, email, password) => {
  const user = await authDao.getUserByEmail(email);
  if (user) {
    throw errorHandler(409, "User Already Exists!");
  }
  try {
    const hashedPassword = await bcryptjs.hash(password, 7);

    return authDao.signup(username, email, hashedPassword);
  } catch (error) {
    console.log(error.message);
    throw error; // Rethrow the error to be caught by the controller
  }
};

authService.signin = async (email, password) => {
  try {
    const user = await authDao.getUserByEmail(email);
    if (!user) {
      throw errorHandler(404, "User Not Found!");
    }

    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      throw errorHandler(401, "Wrong Email Or Password");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = user._doc;

    return { rest, token };
  } catch (error) {
    console.log(error.message);
    throw error; // Rethrow the error to be caught by the controller
  }
};

authService.signInWithGoogle = async (body) => {
  try {
    const user = await authDao.getUserByEmail(body.email);

    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      return { rest, token };
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = await bcryptjs.hash(generatedPassword, 7);
      const username =
        body.name.split(" ").join("").toLowerCase() +
        Math.random().toString(36).slice(-4);
      const newUser = await authDao.signup(
        username,
        body.email,
        hashedPassword,
        body.photo
      );
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;
      return { rest, token };
    }
  } catch (error) {
    console.log(error.message);
    throw error; // Rethrow the error to be caught by the controller
  }
};

export default authService;

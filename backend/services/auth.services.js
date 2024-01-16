import authDao from "../dao/auth.dao.js";
import bcryptjs from "bcryptjs";

const authService = {};
authService.signup = async (username, email, password) => {
  const hashedPassword = await bcryptjs.hash(password, 7);

  return authDao.signup(username, email, hashedPassword);
};

export default authService;

import authService from "../services/auth.services.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    let result = await authService.signup(username, email, password);
    res.status(201).json("User Created Successfully");
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

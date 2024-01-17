import authDao from "../dao/auth.dao.js";
import authService from "../services/auth.services.js";
import errorHandler from "../utils/error.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const { rest, token } = await authService.signin(email, password);

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const signInWithGoogle = async (req, res, next) => {
  try {
    const { rest, token } = await authService.signInWithGoogle(req.body);
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

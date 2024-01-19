import errorHandler from "../utils/error.js";
import userService from "../services/user.services.js";

export const updateUser = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(401, "You can only update your own account"));
    }

    const user = req.body;
    const id = req.params.id;

    let rest = await userService.updateUser(id, user);

    if (!res.headersSent) {
      res.status(200).json(rest);
    }
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(401, "You can only delete your own account"));
    }
    let result = await userService.deleteUser(req.params.id);

    res.clearCookie("access_token");
    res.status(200).json("User Has been deleted");
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

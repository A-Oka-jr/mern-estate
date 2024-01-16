import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      requierd: true,
      unique: true,
    },
    email: {
      type: String,
      requierd: true,
      unique: true,
    },
    password: {
      type: String,
      requierd: true,
    },
  },
  { timeseries: true }
);

const User = mongoose.model("User", userSchema);

export default User;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // This ensures uniqueness for the email field
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // I corrected "timeseries" to "timestamps" assuming it's for adding createdAt and updatedAt timestamps
);

const User = mongoose.model("User", userSchema);

export default User;

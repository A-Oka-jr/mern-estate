import mongoose from "mongoose";

const dbConnection = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("server connected to mern-estate database");
    })
    .catch((error) => {
      console.error(error);
    });
};

export default dbConnection;

import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const mongoUrl = "mongodb+srv://pratyaksh0802:7Zhf64SGUzfUX16p@bikedekho.mhwctxr.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl);

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("MongoDb connection failed");
});

connection.on("connected", () => {
  console.log("Mongodb connected Successfully");
});

export default mongoose;

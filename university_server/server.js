import express from "express";
import dbconfig from "./db.js";

import contactRoute from "./routes/contactRoute.js";

import userRoute from "./routes/userRoute.js"
import cors from "cors";


const app = express();

const port = process.env.PORT || 5000;

app.use(
  cors({
   
    //  origin: "https://xenostack.vercel.app",
    // origin: "http://127.0.0.1:5500", // this is for local development
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/api/contact/", contactRoute);
app.use("/api/auth" , userRoute);


app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});

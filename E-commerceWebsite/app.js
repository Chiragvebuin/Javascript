import express from "express";


// routers
import { v1 } from "./modules/index.js";
const app = express();

app.use(express.json());

app.use("/v1", v1());

app.listen(3000, () => {
  console.log("Server is running on 3000");
});

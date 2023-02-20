import express from "express";
import bodyParser from "body-parser";

// routers
import { v1 } from "./modules/index.js";
const app = express();

app.use(bodyParser.json());

app.use("/v1", v1());

// app.post("/E-commerceWebsite/create", (req, res) => {
//   let data = {
//     user_name: req.body.user_name,
//     user_email: req.body.user_email,
//     password: req.body.password,
//     user_address: req.body.user_address,
//   };
//   let sql = "INSERT INTO user SET ?";
//   let query = connection.query(sql, data, (err, result) => {
//     if (err) throw err;
//     res.send(
//       JSON.stringify({
//         status: 200,
//         error: null,
//         response: "New Record added Succesfully",
//       })
//     );
//   });
// });

// app.get("/E-commerceWebiste/users", async (req, res) => {
//   try {
//     const query = "SELECT * From user";
//     const [rows] = await connection.promise().query(query);
//     res.send(rows);
//   } catch (err) {
//     console.log("An error occured with the query");
//     res.status(500).send({ message: "An error occured with the query" });
//   }
// });

app.listen(3000, () => {
  console.log("Server is running on 3000");
});

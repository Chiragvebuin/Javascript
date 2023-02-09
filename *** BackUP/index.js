import { connection } from "./connection.js";
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
const port = 4000;

app.get("/users", async (req, res) => {
try {
const query = "SELECT * From user";
const [rows] = await connection.query(query);
res.send(rows);
} catch (err) {
console.log("An error occured with the query");
}
});

app.get("/users/:userid", async (req, res) => {
try {
const query = "SELECT * FROM user WHERE userid=?";
const [rows] = await connection.query(query, [req.params.userid]);
res.send(rows);
} catch (err) {
console.log("An error occured with the query");
}
});

app.patch("/users/:userid", async (req, res) => {
try {
const query = "UPDATE user SET ? WHERE userid=?";
const [rows] = await connection.query(query, [req.body, req.params.userid]);
res.send(rows);
} catch (err) {
console.log("An error occured with the query");
res.send(err);
}
});

app.post("/users", async (req, res) => {
try {
const userData = [req.body.name, req.body.emailid, req.body.password];
const query = "INSERT INTO user (name, emailid, password) VALUES (?)";
await connection.query(query, [userData]);
res.send("Created Successfully");
} catch (err) {
console.log("An error occured with the query");
res.send(err);
}
});

app.delete("/users/:userid", async (req, res) => {
try {
const query = "DELETE FROM user WHERE userid=?";
const [rows] = await connection.query(query, [req.params.userid]);
res.send(rows);
} catch (err) {
console.log("An error occured with the query");
}
});

app.listen(port, () =>
console.log(Example app listening on port ${port}!)
);
// import  connection  from '../connection.js';
import express from "express";
import bodyParser from "body-parser";
import Joi from "joi";
import { connection } from "./connection.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

const secretKey = "secretkey";
const app = express();
app.use(bodyParser.json());
const port = 4000;

app.post("/users", async (req, res) => {
  try {
    const userData = req.body;
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).send({ error: error.details[0].message });
    }
    const getQuery = "SELECT * From user";
    const [getRows] = await connection.promise().query(getQuery);
    const finalResult = getRows.filter(
      (element) => element.emailid === req.body.emailid
    );

    if (!finalResult?.length) {
      const query =
        "INSERT INTO user (name, emailid, password) VALUES (?, ?, ?)";
      const [result] = await connection
        .promise()
        .query(query, [userData.name, userData.emailid, userData.password]);
      const userId = result.insertId;

      const getUserQuery = "SELECT * FROM user WHERE userid = ?";
      const [rows] = await connection.promise().query(getUserQuery, [userId]);
      return res.send(rows);
    } else {
      return res.send({ message: "User Already Exists" });
    }
  } catch (err) {
    console.log("An error occurred with the query");
    res.status(400).send({ message: "An error occurred with the query" });
  }
});

app.post("/login", async (req, res) => {
  // Our login logic starts here
  try {
    // Get user input
    const { emailid, password } = req.body;

    // Validate user input
    if (!(emailid && password)) {
      res.status(400).send("All input is required");
    }
    const userQuery = "SELECT * from user WHERE emailid=?";
    const row = await connection.promise().query(userQuery, req.body.emailid);
    if(row[0]?.length){
      row[0].forEach(async (element) => {
        if (
          element.emailid === req.body.emailid &&
          element.password === req.body.password
        ) {
          const accessQuery = "SELECT * from access WHERE userid=?";
          const result = await connection
          .promise()
          .query(accessQuery, element.userid);
          
          const token = jwt.sign({ userid: element.userid, emailid }, secretKey, {
            expiresIn: "2h",
          });
          if (result[0]?.length) {
            const userData = {
              is_login: 1,
              token: token
            }
            const updateQuery = `UPDATE access SET ? WHERE userid=${element.userid}`;
             await connection.promise().query(updateQuery, [userData]);   
  
          } else {
            const insertQuery = "INSERT INTO access(userid,token,is_login) values(?,?,?)";
            await connection.promise().query(insertQuery, [element.userid,token,1],element.userid);
          }
          res.send({
            message: "Login Successfully",
            token: token
          })
        }else{
          res.send("Please enter correct emailid or password")
        }
      });
    }else{
      res.send("Please enter correct emailid")
    }
  } catch (err) {
    console.log(err);
  }
});

// Joi schema for user data validation
const userSchema = Joi.object({
  name: Joi.string().required(),
  emailid: Joi.string().email().required(),
  password: Joi.string().required(),
});

app.get("/users", async (req, res) => {
  try {
    const query = "SELECT * From user";
    const [rows] = await connection.promise().query(query);
    res.send(rows);
  } catch (err) {
    console.log("An error occured with the query");
    res.status(500).send({ message: "An error occured with the query" });
  }
});

app.get("/users/:userid", async (req, res) => {
  try {
    const userid = req.params.userid;
    const accessQuery = "SELECT * FROM access WHERE userid=?";
    const accessResult = await connection.promise().query(accessQuery, userid);
    if(accessResult[0]?.length){
      accessResult[0].forEach(async(element)=>{
        if (!userid) {
          res.status(400).send({ message: "userid is required" });
        }
        if(req.headers.token===element.token){
          const getQuery = "SELECT * From user";
          const [rows] = await connection.promise().query(getQuery);
          const finalResult = rows.filter(
            (element) => element.userid === Number(req.params.userid)
          );
          if (finalResult?.length) {
            // Update user in the database
            const query = "SELECT * FROM user WHERE userid=?";
            const [rows] = await connection.promise().query(query, [userid]);
            res.send(rows);
          } else {
            return res.send({ message: "User Not Found" });
          }
        }else{
          res.send("Invalid Token")
        }
      })

    }

  } catch (err) {
    console.log("An error occured with the query");
    res.status(500).send({ message: "An error occured with the query" });
  }
});

app.put("/users/:userid", async (req, res) => {
  try {
    const userid = req.params.userid;
    const { name, emailid, password } = req.body;

    // Validate request data using Joi
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).send({ error: error.details[0].message });
    }
    const getQuery = "SELECT * From user";
    const [rows] = await connection.promise().query(getQuery);
    const finalResult = rows.filter(
      (element) => element.userid === Number(req.params.userid)
    );
    if (finalResult?.length) {
      // Update user in the database
      const query = `UPDATE user SET ? WHERE userid=?`;
      const result = await connection
        .promise()
        .query(query, [req.body, req.params.userid]);

      // Send success response
      return res.send({ message: "User updated successfully.", result });
    } else {
      return res.send({ message: "User Not Found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Internal server error." });
  }
});

app.patch("/users/:userid", async (req, res) => {
  try {
    const userId = req.params.userid;
    const userData = req.body;
    if (!userId) {
      res.status(400).send({ message: "userid is required" });
    }
    if (!userData || Object.keys(userData).length === 0) {
      res.status(400).send({ message: "user data is required" });
    }

    // Validate request data using Joi
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).send({ error: error.details[0].message });
    }
    const getQuery = "SELECT * From user";
    const [rows] = await connection.promise().query(getQuery);
    const finalResult = rows.filter(
      (element) => element.userid === Number(req.params.userid)
    );
    if (finalResult?.length) {
      // Update user in the database
      const query = "UPDATE user SET ? WHERE userid=?";
      const [rows] = await connection
        .promise()
        .query(query, [userData, userId]);
      res.send(rows);
    } else {
      return res.send({ message: "User Not Found" });
    }
  } catch (err) {
    console.log("An error occured with the query");
    res.status(500).send({ message: "An error occured with the query" });
  }
});



app.delete("/users/:userid", async (req, res) => {
  try {
    const userId = req.params.userid;
    if (!userId) {
      res.status(400).send({ message: "userid is required" });
    }

    const getQuery = "SELECT * From user";
    const [rows] = await connection.promise().query(getQuery);
    const finalResult = rows.filter(
      (element) => element.userid === Number(req.params.userid)
    );
    if (finalResult?.length) {
      // Update user in the database
      const query = "DELETE FROM user WHERE userid=?";
      await connection.promise().query(query, [userId]);
      res.send({ message: "User deleted successfully." });
    } else {
      return res.send({ message: "User Not Found" });
    }
  } catch (err) {
    console.log("An error occurred with the query");
    res.status(500).send({ message: "An error occurred with the query" });
  }
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

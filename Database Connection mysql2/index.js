import {connection} from './connection.js';
import express from 'express';
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.json())
const port = 4000

app.get('/users', (req, res) => {
    const query = "SELECT * From user";
    connection.query(query, function (err, rows) {
      if (err) {
        console.log("An error occured with the quyery");
        return;
      }
      res.send(rows);
    });
  })

app.get('/users/:userid', (req, res) => {
    const query = "SELECT * FROM user WHERE userid=?";
    connection.query(query,[req.params.userid], (err, rows) => {
      if (err) {
        console.log("An error occured with the quyery");
        return;
      }
      res.send(rows);
    });
  })

app.patch('/users/:userid', (req, res) => {
    const query = "UPDATE user SET ? WHERE userid=?";
    connection.query(query, [req.body, req.params.userid], (err, rows) => {
      if (err) {
        console.log("An error occured with the query");
        res.send(err)
      }
      res.send(rows);
    });
})

app.put('/users/:userid', (req, res) => {
    const query = "UPDATE user SET ? WHERE userid=?";
    connection.query(query, [req.body, req.params.userid], (err, rows) => {
      if (err) {
        console.log("An error occured with the query");
        res.send(err)
      }
      res.send("Updated Successfully");
    });
})

app.post('/users', (req, res) => {
    const userData = [req.body.name, req.body.emailid, req.body.password]
    const query = "INSERT INTO user (name, emailid, password) VALUES (?)";
    connection.query(query, [userData], (err, rows) => {
      if (err) {
        console.log("An error occured with the query");
        res.send(err)
      }
      res.send("Created Successfully");
    });
}) 

app.delete('/users/:userid', (req, res) => {
  const query = "DELETE FROM user WHERE userid=?";
  connection.query(query,[req.params.userid], (err, rows) => {
    if (err) {
      console.log("An error occured with the quyery");
      return;
    }
    res.send(rows);
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

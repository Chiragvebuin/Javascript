import { connection } from './connection.js';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
const port = 4000;

app.get('/users', async (req, res) => {
  try {
    const query = 'SELECT * From user';
    const [rows] = await connection.query(query);
    res.send(rows);
  } catch (err) {
    console.log('An error occured with the query');
    res.status(500).send({ message: 'An error occured with the query' });
  }
});

app.get('/users/:userid', async (req, res) => {
  try {
    const userId = req.params.userid;
    if (!userId) {
      res.status(400).send({ message: 'userid is required' });
    }
    const query = 'SELECT * FROM user WHERE userid=?';
    const [rows] = await connection.query(query, [userId]);
    res.send(rows);
  } catch (err) {
    console.log('An error occured with the query');
    res.status(500).send({ message: 'An error occured with the query' });
  }
});

app.patch('/users/:userid', async (req, res) => {
  try {
    const userId = req.params.userid;
    const userData = req.body;
    if (!userId) {
      res.status(400).send({ message: 'userid is required' });
    }
    if (!userData || Object.keys(userData).length === 0) {
      res.status(400).send({ message: 'user data is required' });
    }
    const query = 'UPDATE user SET ? WHERE userid=?';
    const [rows] = await connection.query(query, [userData, userId]);
    res.send(rows);
  } catch (err) {
    console.log('An error occured with the query');
    res.status(500).send({ message: 'An error occured with the query' });
  }
});

app.post('/users', async (req, res) => {
  try {
    const userData = req.body;
    if (!userData || !userData.name || !userData.emailid || !userData.password) {
      res.status(400).send({ message: 'name, emailid and password are required' });
    }
    const query = 'INSERT INTO user (name, emailid, password) VALUES (?)';
    await connection.query(query, [[userData.name, userData.emailid, userData.password]]);
    res.send({ message: 'Created Successfully' });
  } catch (err) {
    console.log('An error occured with the query');
    res.status(500).send({ message: 'An error occured with the query' });
  }
});

app.delete('/users/:userid', async (req, res) => {

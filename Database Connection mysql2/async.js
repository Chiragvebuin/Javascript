import {connection} from './connection.js';
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
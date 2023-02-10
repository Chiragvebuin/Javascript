import {connection} from './connection.js';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
const port = 4000;

app.get('/users', async(req, res) => {
    const query = "SELECT * From user";
    connection.query(query, function (err, rows) {
      if (err) {
        console.log("An error occured with the quyery");
        return;
      }
      res.send(rows);
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
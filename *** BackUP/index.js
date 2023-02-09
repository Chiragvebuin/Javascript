import {connection} from './connection.js';
import express from 'express';

const app = express();
const port = 4000;

app.get('/', function(req, res) {
  const query = "SELECT * From user";
  connection.query(query, function(err, rows, fields) {
    if (err) {
      console.log("An error occurred with the query");
      return;
    }
    res.send(rows);
  });
});

app.post('/', function(req, res) {
  const query = "INSERT INTO user SET ?";
  connection.query(query, req.body, function(err, result) {
    if (err) {
      console.log("An error occurred with the query");
      return;
    }
    res.send(result);
  });
});

app.put('/:id', function(req, res) {
  const query = "UPDATE user SET ? WHERE id = ?";
  connection.query(query, [req.body, req.params.id], function(err, result) {
    if (err) {
      console.log("An error occurred with the query");
      return;
    }
    res.send(result);
  });
});

app.delete('/:id', function(req, res) {
  const query = "DELETE FROM user WHERE id = ?";
  connection.query(query, [req.params.id], function(err, result) {
    if (err) {
      console.log("An error occurred with the query");
      return;
    }
    res.send(result);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

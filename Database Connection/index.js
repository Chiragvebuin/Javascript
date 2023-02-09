//got the library
var mysql = require('mysql');


//creating a connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // empty pass if local
  database: "data",
  port: 3307
});


//if error accure in connection
connection.connect(function(err) {
  if(err) {
    console.log(err.code);
    console.log(err.fatal);
  }
});


//creating a query
$query = "SELECT * From user";


//running query
connection.query($query, function(err, rows, fields) {
  if(err) {
    console.log("An error occured with the quyery");
    return;
  }
  console.log("Query successully executed", rows);
})


//simple connection
connection.end(function(){
  console.log("connection closed");
})
//conneciton details to mysql
import mysql from "mysql2/promise";
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "", // empty pass if local
  database: "e-commerce",
  port: 3306,
});

export default pool;

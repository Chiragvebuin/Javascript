//creating a connection
import mysql from 'mysql2';
export const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", // empty pass if local
    database: "creation",
    port: 3306
});

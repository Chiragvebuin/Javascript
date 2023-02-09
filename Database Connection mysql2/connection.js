//creating a connection
import mysql from 'mysql2';
export const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "", // empty pass if local
    database: "data",
    port: 3307
});

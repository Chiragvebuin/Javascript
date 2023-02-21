import connection from '../../helper/service.js';
import { generateToken } from '../../helper/jwt.js';

export const testService = async () => {
    console.log("testService");
    return 'ok'
}

export async function registerUsers(email) {
  const query = "SELECT * from user WHERE emailid=?";
  const [rows] = await connection.promise().query(query, email);
  return rows;
}


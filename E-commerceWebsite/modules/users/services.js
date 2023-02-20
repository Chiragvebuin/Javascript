import connection from "../../helper/service.js";

export const selectUsers = async () => {
  return await connection.query("SELECT * FROM user");
};

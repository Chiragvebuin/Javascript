import { connection } from "./connection.js";

export const checkToken = async (req, res, next) => {
    try {
      const userid = req.params.userid;
      const accessQuery = "SELECT * FROM access WHERE userid=?";
      const accessResult = await connection.promise().query(accessQuery, userid);
      if (accessResult[0]?.length) {
        const validToken = accessResult[0].some((element) => {
          return req.headers.token === element.token;
        });
        if (validToken) {
          const validUser = accessResult[0].some((element) => {
            return element.userid === Number(userid);
          });
          if (validUser) {
            next();
          } else {
            res.status(400).send("Invalid user");
          }
        } else {
          res.status(401).send("Invalid Token");
        }
      } else {
        res.status(404).send("User Not Found");
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: "Internal server error." });
    }
  };
import { selectUsers } from "./services.js";

export const getUsersController = async (req, res, next) => {
  try {
    const users = await selectUsers();
    console.log(users);
    return res.send(users);
  } catch (error) {
     res.status(500).end("ISE");

    console.error(error);
  }
};

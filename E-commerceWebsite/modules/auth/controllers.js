import { testService } from "./services.js";
/**
 * Function to handle GET stauts request
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const statusController = async (req, res, next) => {
  console.log("Hello");
  const result = await testService();
  return res.send(result);
};

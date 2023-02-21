import { testService, registerUsers } from "./services.js";
import pool from "../../helper/service.js";
import joi from "joi";

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

export async function registerController(req, res, next) {
  try {
    const requestData = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      is_active: req.body.is_active,
    };
    console.debug(requestData);
    const schema = joi.object({
      name: joi.string().alphanum().min(3).max(25).trim(true).required(),
      email: joi.string().email().trim(true).required(),
      password: joi.string().min(8).trim(true).required(),
      address: joi.array().items(joi.string().alphanum()).default([]),
      is_active: joi.boolean().default(true),
    });

    try {
      const value = await schema.validateAsync(requestData);
    } catch (err) {
      return res.status(400).send(err);
    }

    const rows = await registerUsers(email);
    if (rows.length) {
      return res.send("User already exists");
    }

    const insertQuery =
      "INSERT INTO user(email, name, password, address) values(?, ?, ?, ?)";
    await pool.promise().query(insertQuery, [email, name, password, address]);

    return res.send("User registered successfully");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
}

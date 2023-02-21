const { selectUsers, loginUser, logoutUser } = require("./userService");

async function registerController(req, res, next) {
  try {
    const { email, name, password, address } = req.body;

    if (!(email && name && password && address)) {
      return res.status(400).send("All input is required");
    }

    const rows = await selectUsers(email);
    if (rows.length) {
      return res.send("User already exists");
    }

    const insertQuery = "INSERT INTO user(emailid, name, password, address) values(?, ?, ?, ?)";
    await connection.promise().query(insertQuery, [email, name, password, address]);

    return res.send("User registered successfully");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
}

async function loginController(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).send("Email and password are required");
    }

    const { message, token } = await loginUser(email, password);

    return res.send({ message, token });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
}

async function logoutController(req, res, next) {
  try {
    const userId = req.userId;
    await logoutUser(userId);
    return res.send("User logged out successfully");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
}

module.exports = { registerController, loginController, logoutController };

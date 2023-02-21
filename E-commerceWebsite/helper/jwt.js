import jwt from "jsonwebtoken";
import secretKey from "secret-key";

export function generateToken(user_id, email) {
  const token = jwt.sign({ user_id, email }, secretKey, {
    expiresIn: "2h",
  });
  return token;
}


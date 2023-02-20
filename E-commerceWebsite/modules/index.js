import { authRouter } from "./auth/routes.js";
import { usersRouter } from "./users/routes.js";
import { Router } from "express";

export const v1 = () => {
  const router = Router();
  router.use("/auth", authRouter());
  router.use("/users", usersRouter());

  return router;
};

import { Router } from "express";
import { getUsersController } from "./controllers.js";

export const usersRouter = () => {
  const router = Router();
  router.get("/", getUsersController);

  return router;
};

import { Router } from "express";
import { statusController } from "./controllers.js";
import { registerController } from "./controllers.js";

export const authRouter = () => {
  const router = Router();
  router.get("/status", statusController);
  router.post("/register", registerController);

  return router;
};



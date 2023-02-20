import { Router } from "express";
import { statusController } from "./controllers.js";

export const authRouter = () => {
  const router = Router();
  router.get("/status", statusController);

  return router;
};

import { Router } from "express";
import emailRouter from "./email.router";

const router = Router();

router.get("/", (req, res, next) => {
  res.json({ message: "route" });
});

router.use("/email", emailRouter);
export default router;

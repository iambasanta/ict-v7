import { Router } from "express";
import { emailHandler } from "../controllers/email.controller";

const emailRouter = Router();

emailRouter.post("/", emailHandler);

export default emailRouter;

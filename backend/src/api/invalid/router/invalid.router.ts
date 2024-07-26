import { Router } from "express";
import { invalid } from "../controller/invalid.controller";


export const invalidRouter = Router();

invalidRouter.get("*", invalid);

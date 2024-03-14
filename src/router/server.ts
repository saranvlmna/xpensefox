import { Router } from "express";
import { ServerController } from "../controller/server";
export const serverRouter = Router();
let serverController = new ServerController();

serverRouter.get("/", serverController.heyServer);

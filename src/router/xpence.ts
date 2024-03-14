import { Router } from "express";
import { XpenceController } from "../controller/xpence";
export const xpenceRouter = Router();
let xpenceController = new XpenceController();

xpenceRouter.post("/card/create", xpenceController.createXpenceCard);
xpenceRouter.get("/card/edit", xpenceController.editXpenceCard);
xpenceRouter.put("/card/delete", xpenceController.deleteXpenceCard);
xpenceRouter.delete("/card/list", xpenceController.listXpenceCards);
xpenceRouter.delete("/fetch", xpenceController.fetchXpence);
xpenceRouter.delete("/add", xpenceController.addXpence);
xpenceRouter.delete("/edit", xpenceController.ediXpence);
xpenceRouter.delete("/delete", xpenceController.deleteXpence);

import {Router} from "express";
import {XpenseController} from "../controller/xpense";
export const xpenseRouter = Router();
let xpenseController = new XpenseController();

xpenseRouter.post("/card/create", xpenseController.createxpenseCard);
xpenseRouter.put("/card/edit", xpenseController.editxpenseCard);
xpenseRouter.delete("/card/delete", xpenseController.deletexpenseCard);
xpenseRouter.get("/card/list", xpenseController.listxpenseCards);
xpenseRouter.get("/fetch", xpenseController.fetchxpense);
xpenseRouter.post("/add", xpenseController.addxpense);
xpenseRouter.put("/edit", xpenseController.edixpense);
xpenseRouter.delete("/delete", xpenseController.deletexpense);

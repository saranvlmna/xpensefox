import {Router} from "express";
import {XpenseController} from "../controller/xpense";
export const xpenseRouter = Router();
let xpenseController = new XpenseController();

xpenseRouter.post("/card/create", xpenseController.createxpenseCard);
xpenseRouter.get("/card/edit", xpenseController.editxpenseCard);
xpenseRouter.put("/card/delete", xpenseController.deletexpenseCard);
xpenseRouter.delete("/card/list", xpenseController.listxpenseCards);
xpenseRouter.delete("/fetch", xpenseController.fetchxpense);
xpenseRouter.delete("/add", xpenseController.addxpense);
xpenseRouter.delete("/edit", xpenseController.edixpense);
xpenseRouter.delete("/delete", xpenseController.deletexpense);

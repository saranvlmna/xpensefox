import {Router} from "express";
import {XpenseController} from "../controller/xpense";
var authentication = require("../middleware/authentication");
export const xpenseRouter = Router();
let xpenseController = new XpenseController();

xpenseRouter.post("/card/create", authentication, xpenseController.createxpenseCard);
xpenseRouter.put("/card/edit", authentication, xpenseController.editxpenseCard);
xpenseRouter.delete("/card/delete", authentication, xpenseController.deletexpenseCard);
xpenseRouter.get("/card/list", authentication, xpenseController.listxpenseCards);
xpenseRouter.get("/fetch", authentication, xpenseController.fetchxpense);
xpenseRouter.post("/add", authentication, xpenseController.addxpense);
xpenseRouter.put("/edit", authentication, xpenseController.edixpense);
xpenseRouter.delete("/delete", authentication, xpenseController.deletexpense);

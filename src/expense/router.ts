import {Router} from "express";
import {XpenseController} from "./xpense";
var authentication = require("../middleware/authentication");
export const expenseRouter = Router();
let xpenseController = new XpenseController();

expenseRouter.post("/card/create", authentication, xpenseController.createxpenseCard);
expenseRouter.put("/card/edit", authentication, xpenseController.editxpenseCard);
expenseRouter.delete("/card/delete", authentication, xpenseController.deletexpenseCard);
expenseRouter.get("/card/list", authentication, xpenseController.listxpenseCards);
expenseRouter.get("/fetch", authentication, xpenseController.fetchxpense);
expenseRouter.post("/add", authentication, xpenseController.addxpense);
expenseRouter.put("/edit", authentication, xpenseController.edixpense);
expenseRouter.delete("/delete", authentication, xpenseController.deletexpense);

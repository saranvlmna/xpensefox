import {Router} from "express";
import {UserController} from "../user/user";
var authentication = require("../middleware/authentication");
export const cardRouter = Router();
let userController = new UserController();

cardRouter.post("/singup", userController.signUp);
cardRouter.post("/singin", userController.signIn);
cardRouter.get("/fetch", authentication, userController.getProfile);
cardRouter.put("/edit", authentication, userController.editUser);
cardRouter.delete("/delete", authentication, userController.deleteUser);

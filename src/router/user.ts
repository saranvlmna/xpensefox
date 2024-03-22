import {Router} from "express";
import {UserController} from "../controller/user";
var authentication = require("../middleware/authentication");
export const userRouter = Router();
let userController = new UserController();

userRouter.post("/singup", userController.signUp);
userRouter.post("/singin", userController.signIn);
userRouter.get("/fetch", authentication, userController.getProfile);
userRouter.put("/edit", authentication, userController.editUser);
userRouter.delete("/delete", authentication, userController.deleteUser);

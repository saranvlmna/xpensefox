import {Router} from "express";
import {UserController} from "../controller/user";
export const userRouter = Router();
let userController = new UserController();

userRouter.post("/create", userController.createUser);
userRouter.get("/fetch", userController.getProfile);
userRouter.put("/edit", userController.editUser);
userRouter.delete("/delete", userController.deleteUser);

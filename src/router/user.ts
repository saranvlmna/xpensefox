import {Router} from "express";
import {UserController} from "../controller/user";
export const userRouter = Router();
let userController = new UserController();

userRouter.post("/singup", userController.signUp);
userRouter.post("/singin", userController.signIn);
userRouter.get("/fetch", userController.getProfile);
userRouter.put("/edit", userController.editUser);
userRouter.delete("/delete", userController.deleteUser);

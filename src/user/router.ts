import {Router} from "express";
import authentication from "../shared/middleware/authentication";
import login from "./login";
import profileDelete from "./profile.delete";
import profileEdit from "./profile.edit";
import profileFetch from "./profile.fetch";
import signup from "./signup";
export const userRouter = Router();

userRouter.post("/singup", signup);
userRouter.post("/singin", login);
userRouter.get("/fetch", authentication, profileFetch);
userRouter.put("/edit", authentication, profileEdit);
userRouter.delete("/delete", authentication, profileDelete);

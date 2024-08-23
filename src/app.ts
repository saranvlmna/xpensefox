import cors from "cors";
import express, {Express} from "express";
import {serverRouter, userRouter, xpenseRouter} from "./router";
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/xpensefox", serverRouter);
app.use("/xpensefox/user", userRouter);
app.use("/xpensefox/xpense", xpenseRouter);

export {app};

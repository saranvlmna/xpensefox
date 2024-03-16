import cors from "cors";
import express, { Express } from "express";
import { serverRouter, userRouter, xpenceRouter } from "./router";
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", serverRouter);
app.use("/user", userRouter);
app.use("/xpence", xpenceRouter);

export { app };

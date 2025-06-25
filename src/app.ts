import cors from "cors";
import express, {Express} from "express";
import {cardRouter} from "./card/router";
import {expenseRouter} from "./expense/router";
import {userRouter} from "./user/router";
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.send("fox watching !!");
});

app.use("/user", userRouter);
app.use("/card", cardRouter);
app.use("/xpense", expenseRouter);

export {app};

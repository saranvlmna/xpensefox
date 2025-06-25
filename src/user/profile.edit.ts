import {StatusCodes} from "http-status-codes";
import edit from "./lib/edit";

export default async (req: any, res: any) => {
  try {
    req.body["userId"] = req["xuser"].id;
    const response = await edit(req.body);
    res.status(StatusCodes.OK).send({
      response,
    });
  } catch (error: any) {
    res.status(StatusCodes.BAD_GATEWAY).send({
      message: error.message,
    });
  }
};

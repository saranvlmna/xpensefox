import {StatusCodes} from "http-status-codes";
import login from "./lib/login";

export default (req: Request, res: any) => {
  try {
    const response = login(req.body);
    res.status(StatusCodes.OK).send({
      data: response,
    });
  } catch (error: any) {
    console.log(error);
    res.status(StatusCodes.BAD_GATEWAY).send({
      message: error.message,
    });
  }
};

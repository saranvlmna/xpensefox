import {StatusCodes} from "http-status-codes";
import deleteProfile from "./lib/delete";

export default async (req: any, res: any) => {
  try {
    let userId = req["xuser"].id;
    const response = await deleteProfile(userId);
    res.status(StatusCodes.OK).send({
      response,
    });
  } catch (error: any) {
    res.status(StatusCodes.BAD_GATEWAY).send({
      message: error.message,
    });
  }
};

import {StatusCodes} from "http-status-codes";
import profileFetch from "./lib/profile.fetch";

export default (req: any, res: any) => {
  try {
    let userId = req["xuser"].id;
    const response = profileFetch(userId);

    res.status(StatusCodes.OK).send({
      response,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

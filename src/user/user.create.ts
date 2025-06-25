import {StatusCodes} from "http-status-codes";

export default async (req: Request, res: any) => {
  try {
    const response = await userService.signUp(req.body);
    res.status(StatusCodes.OK).send({
      response,
    });
  } catch (error: any) {
    res.status(StatusCodes.BAD_GATEWAY).send({
      message: error.message,
    });
  }
};

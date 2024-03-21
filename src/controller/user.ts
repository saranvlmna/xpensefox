import {StatusCodes} from "http-status-codes";
import {UserService} from "../service/user";
const userService = new UserService();
export class UserController {
  constructor() {}

  async signUp(req: Request, res: any) {
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
  }

  async signIn(req: Request, res: any) {
    try {
      const response = await userService.signIn(req.body);
      res.status(StatusCodes.OK).send({
        data: response,
      });
    } catch (error: any) {
      res.status(StatusCodes.BAD_GATEWAY).send({
        message: error.message,
      });
    }
  }

  async getProfile(req: any, res: any) {
    try {
      const response = await userService.getProfile(req.query["userId"]);
      console.log(response);
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async editUser(req: Request, res: any) {
    try {
      const response = await userService.editUser(req.body);
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error: any) {
      res.status(StatusCodes.BAD_GATEWAY).send({
        message: error.message,
      });
    }
  }

  async deleteUser(req: any, res: any) {
    try {
      const response = await userService.deleteUser(req.query["userId"]);
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error: any) {
      res.status(StatusCodes.BAD_GATEWAY).send({
        message: error.message,
      });
    }
  }
}

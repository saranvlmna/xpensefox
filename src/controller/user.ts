import { StatusCodes } from "http-status-codes";
import { UserService } from "../service/user";
const userService = new UserService();
export class UserController {
  constructor() {}

  async createUser(req: Request, res: any) {
    try {
      console.log("data", req.body);
      const response = await userService.createUser(req.body);
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error: any) {
      res.status(StatusCodes.BAD_GATEWAY).send({
        message: error.message,
      });
    }
  }

  async listUser(req: Request, res: any) {
    try {
      console.log("get");
      const response = await userService.listUser(req.body);
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
      console.log("bdoy", req.body);
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

  async deleteUser(req: Request, res: any) {
    try {
      console.log("data", req.body);
      const response = await userService.deleteUser(req.body);
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

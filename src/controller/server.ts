import { StatusCodes } from "http-status-codes";
import { ServerService } from "../service/server";
const serverService = new ServerService();
export class ServerController {
  constructor() {}

  async heyServer(req: any, res: any) {
    try {
      const response = await serverService.heyServer();
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

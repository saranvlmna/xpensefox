import {StatusCodes} from "http-status-codes";
import {XpenseService} from "../service/xpense";
const xpenseService = new XpenseService();
export class XpenseController {
  constructor() {}

  async createxpenseCard(req: any, res: any) {
    try {
      const response = await xpenseService.createxpenseCard(req.body);
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error: any) {
      console.log(error);
      res.status(StatusCodes.BAD_GATEWAY).send({
        message: error.message,
      });
    }
  }
  async editxpenseCard(req: any, res: any) {
    try {
      const response = await xpenseService.editxpenseCard(req.body);
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error: any) {
      console.log(error);
      res.status(StatusCodes.BAD_GATEWAY).send({
        message: error.message,
      });
    }
  }
  async deletexpenseCard(req: any, res: any) {
    try {
      const response = await xpenseService.deletexpenseCard();
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error: any) {
      console.log(error);
      res.status(StatusCodes.BAD_GATEWAY).send({
        message: error.message,
      });
    }
  }
  async listxpenseCards(req: any, res: any) {
    try {
      const response = await xpenseService.listxpenseCards();
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error: any) {
      console.log(error);
      res.status(StatusCodes.BAD_GATEWAY).send({
        message: error.message,
      });
    }
  }
  async fetchxpense(req: any, res: any) {
    try {
      const response = await xpenseService.fetchxpense();
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error: any) {
      console.log(error);
      res.status(StatusCodes.BAD_GATEWAY).send({
        message: error.message,
      });
    }
  }
  async addxpense(req: any, res: any) {
    try {
      const response = await xpenseService.addxpense(req.body);
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error: any) {
      console.log(error);
      res.status(StatusCodes.BAD_GATEWAY).send({
        message: error.message,
      });
    }
  }
  async edixpense(req: any, res: any) {
    try {
      const response = await xpenseService.edixpense();
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error: any) {
      console.log(error);
      res.status(StatusCodes.BAD_GATEWAY).send({
        message: error.message,
      });
    }
  }
  async deletexpense(req: any, res: any) {
    try {
      const response = await xpenseService.deletexpense();
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error: any) {
      console.log(error);
      res.status(StatusCodes.BAD_GATEWAY).send({
        message: error.message,
      });
    }
  }
}

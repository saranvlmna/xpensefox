import {StatusCodes} from "http-status-codes";
import {XpenseService} from "./lib/xpense";
const xpenseService = new XpenseService();
export class XpenseController {
  constructor() {}

  async createxpenseCard(req: any, res: any) {
    try {
      req.body["userId"] = req["xuser"].id;
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
      req.body["userId"] = req["xuser"].id;
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
      req.body["userId"] = req["xuser"].id;
      const response = await xpenseService.deletexpenseCard(req.body);
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
      req.body["userId"] = req["xuser"].id;
      const response = await xpenseService.listXpenseCards(req.body);
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
      req.query["userId"] = req["xuser"].id;
      const response = await xpenseService.fetchxpense(req.query);
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
      req.body["userId"] = req["xuser"].id;
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
      req.body["userId"] = req["xuser"].id;
      const response = await xpenseService.edixpense(req.body);
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
      req.body["userId"] = req["xuser"].id;
      const response = await xpenseService.deletexpense(req.body);
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

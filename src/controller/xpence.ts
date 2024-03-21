import {StatusCodes} from "http-status-codes";
import {XpenceService} from "../service/xpence";
const xpenceService = new XpenceService();
export class XpenceController {
  constructor() {}

  async createXpenceCard(req: any, res: any) {
    try {
      const response = await xpenceService.createXpenceCard(req.body);
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
  async editXpenceCard(req: any, res: any) {
    try {
      const response = await xpenceService.editXpenceCard();
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
  async deleteXpenceCard(req: any, res: any) {
    try {
      const response = await xpenceService.deleteXpenceCard();
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
  async listXpenceCards(req: any, res: any) {
    try {
      const response = await xpenceService.listXpenceCards();
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
  async fetchXpence(req: any, res: any) {
    try {
      const response = await xpenceService.fetchXpence();
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
  async addXpence(req: any, res: any) {
    try {
      const response = await xpenceService.addXpence();
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
  async ediXpence(req: any, res: any) {
    try {
      const response = await xpenceService.ediXpence();
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
  async deleteXpence(req: any, res: any) {
    try {
      const response = await xpenceService.deleteXpence();
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

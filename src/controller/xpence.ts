import { StatusCodes } from "http-status-codes";
import { XpenceService } from "../service/xpence";
const xpenceService = new XpenceService();
export class XpenceController {
  constructor() {}

  async createXpenceCard(req: any, res: any) {
    try {
      const response = await xpenceService.createXpenceCard();
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async editXpenceCard(req: any, res: any) {
    try {
      const response = await xpenceService.editXpenceCard();
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async deleteXpenceCard(req: any, res: any) {
    try {
      const response = await xpenceService.deleteXpenceCard();
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async listXpenceCards() {
    try {
      const response = await xpenceService.heyServer();
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async fetchXpence() {
    try {
      const response = await xpenceService.heyServer();
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async addXpence() {
    try {
      const response = await xpenceService.heyServer();
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async ediXpence() {
    try {
      const response = await xpenceService.heyServer();
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async deleteXpence() {
    try {
      const response = await xpenceService.heyServer();
      res.status(StatusCodes.OK).send({
        response,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

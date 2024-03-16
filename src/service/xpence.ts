const XpenceCard = require("../../models").XpenceCard;

export class XpenceService {
  constructor() {}

  async createXpenceCard(data: any) {
    if (!data.name) throw Error("params missing");
    return await XpenceCard.create(data);
  }
  editXpenceCard() {}
  deleteXpenceCard() {}
  listXpenceCards() {}
  fetchXpence() {}
  addXpence() {}
  ediXpence() {}
  deleteXpence() {}
}

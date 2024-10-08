import {Sequelize} from "sequelize";
import Xpense from "../../database/models/xpense";
import XpenseCard from "../../database/models/xpense_card";
export class XpenseService {
  constructor() {}

  async createxpenseCard(data: any) {
    if (!data.name) throw Error("params missing");
    return await XpenseCard.create(data);
  }

  async editxpenseCard(data: any) {
    let updatingData = {
      name: data.name ?? data.name,
      budget: data.budget ?? data.budget,
    };
    await XpenseCard.update(updatingData, {
      where: {
        userId: data.userId,
        id: data.cardId,
      },
    });
    return "Xpense Card Updated";
  }

  async deletexpenseCard(data: any) {
    await XpenseCard.destroy({
      where: {
        userId: data.userId,
        id: data.cardId,
      },
    });
    return "Card Removed";
  }

  async listXpenseCards(data: any) {
    return await XpenseCard.findAll({
      where: {
        userId: data.userId,
      },
      attributes: {
        include: [[Sequelize.fn("SUM", Sequelize.col("Xpenses.amount")), "expenditure"]],
      },
      include: [
        {
          model: Xpense,
          attributes: [],
        },
      ],
      group: ["XpenseCard.id"],
    });
  }

  async fetchxpense(data: any) {
    return await XpenseCard.findAll({
      where: {
        userId: data.userId,
        id: data.cardId,
      },
      include: [
        {
          model: Xpense,
        },
      ],
    });
  }

  async addxpense(data: any) {
    if (!data.userId || !data.cardId || !data.amount) throw Error("params missing");
    return await Xpense.create(data);
  }

  async edixpense(data: any) {
    await Xpense.update(data, {
      where: {
        userId: data.userId,
        id: data.id,
      },
    });
    return "Xpense Updated";
  }

  async deletexpense(data: any) {
    await Xpense.destroy({
      where: {
        userId: data.userId,
        id: data.id,
      },
    });
    return "Xpense Removed";
  }
}

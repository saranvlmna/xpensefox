import Xpense from "../../models/xpense";
import XpenseCard from "../../models/xpense_card";
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
      is_active: data.is_active ?? data.is_active,
    };

    let updated = await XpenseCard.update(updatingData, {
      where: {
        userId: data.userId,
      },
    });
    return "updated" + updated;
  }
  deletexpenseCard() {}
  listxpenseCards() {}
  fetchxpense() {}
  async addxpense(data: any) {
    if (!data.userId || !data.cardId || !data.amount) throw Error("params missing");
    return await Xpense.create(data);
  }
  edixpense() {}
  deletexpense() {}
}

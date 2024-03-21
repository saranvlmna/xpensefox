import Xpense from "../../models/xpense";
import XpenseCard from "../../models/xpense_card";
export class XpenseService {
  constructor() {}

  async createxpenseCard(data: any) {
    if (!data.name) throw Error("params missing");
    return await XpenseCard.create(data);
  }
  editxpenseCard() {}
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

import xpenseCard from "../../models/xpense_card";
export class XpenseService {
  constructor() {}

  async createxpenseCard(data: any) {
    if (!data.name) throw Error("params missing");
    return await xpenseCard.create(data);
  }
  editxpenseCard() {}
  deletexpenseCard() {}
  listxpenseCards() {}
  fetchxpense() {}
  addxpense() {}
  edixpense() {}
  deletexpense() {}
}

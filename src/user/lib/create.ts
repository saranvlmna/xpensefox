import User from "../../../database/models/user";
import {SecurityService} from "../../shared/utilities/hash";
import findByPhone from "./find.by.phone";

export default async (data: any) => {
  try {
    const securityService = new SecurityService();

    if (!data.user_name || !data.phone || !data.password) throw Error("params missing");

    data.password = await securityService.genHash(data.password);

    if (await findByPhone(data.phone)) throw Error("user already exist given phone!");

    return await User.create(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

import {SecurityService} from "../../shared/utilities/hash";
import findByPhone from "./find.by.phone";

export default async (data: any) => {
  try {
    const securityService = new SecurityService();
    let user: any;

    if (!data.phone || !data.password) throw Error("params missing");

    user =
      findByPhone(data.phone) ||
      (() => {
        throw new Error("User does not exist");
      })();
    (await securityService.compareHash(data.password, user.password))
      ? true
      : (() => {
          throw new Error("Wrong Password");
        })();
    return securityService.getToken(user);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

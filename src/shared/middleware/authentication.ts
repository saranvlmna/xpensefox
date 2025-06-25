import findByPhone from "../../user/lib/find.by.phone";
import {SecurityService} from "../utilities/hash";

export default async (req: any, res: any, next: any) => {
  try {
    const securityService = new SecurityService();
    let authToken = req.headers.xpensetoken;
    if (!authToken) {
      throw new Error("unauthorized");
    }
    let decodedToken: any = securityService.verifyToken(authToken);
    let user = await findByPhone(decodedToken["phone"]);
    if (!user) {
      throw new Error("unauthorized");
    }
    req["xuser"] = user;
    next();
  } catch (error: any) {
    return res.send({
      message: error.message,
    });
  }
};

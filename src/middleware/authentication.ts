import {HashService} from "../service/hash";
import {UserService} from "../service/user";
let hashService = new HashService();
let userService = new UserService();

module.exports = async function (req: any, res: any, next: any) {
  try {
    let authToken = req.headers.xpensetoken;
    if (!authToken) {
      throw new Error("unauthorized");
    }
    let decodedToken: any = hashService.verifyToken(authToken);
    let user = await userService.findUserByEmail(decodedToken["email"]);
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

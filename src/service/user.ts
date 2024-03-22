import User from "../../database/models/user";
import {HashService} from "./hash";
const hashService = new HashService();
export class UserService {
  constructor() {}

  async signUp(data: any) {
    if (!data.name || !data.email || !data.password) throw Error("params missing");
    data.password = await hashService.genHash(data.password);
    if (await this.findUserByEmail(data.email)) throw Error("user already exist given mail id!!!");
    return await User.create(data);
  }

  async signIn(data: any) {
    if (!data.email || !data.password) throw Error("params missing");
    let user: any;
    user =
      (await this.findUserByEmail(data.email)) ||
      (() => {
        throw new Error("User does not exist");
      })();
    (await hashService.compareHash(data.password, user.password))
      ? true
      : (() => {
          throw new Error("Wrong Password");
        })();
    return hashService.getToken(user);
  }

  async getProfile(userId: any) {
    if (!userId) throw Error("params missing userId");
    return await User.findOne({
      where: {
        id: userId,
      },
      raw: true,
    });
  }

  async editUser(data: any) {
    if (!data.userId) throw Error("params missing userId");
    return await User.update(data, {
      where: {
        id: data.userId,
      },
    });
  }

  async deleteUser(userId: any) {
    if (!userId) throw Error("params missing userId");
    return await User.destroy({
      where: {
        id: userId,
      },
    });
  }

  async findUserByEmail(email: any) {
    return await User.findOne({
      where: {
        email,
      },
      raw: true,
    });
  }
}

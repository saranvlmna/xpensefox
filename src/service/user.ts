const User = require("../../models").User;
export class UserService {
  constructor() {}

  async createUser(data: any) {
    if (!data.name || !data.email) throw Error("params missing");
    if (await this.findUserByEmail(data.email))
      throw Error("user already exist given mail id!!!");
    return await User.create(data);
  }

  async getProfile(userId: any) {
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
    });
  }
}

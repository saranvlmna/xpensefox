import User from "../../../database/models/user";
export default async (data: any) => {
  try {
    if (!data.user_name || !data.phone || !data.password) throw Error("params missing");
    data.password = await hashService.genHash(data.password);
    if (await this.findUserByPhone(data.phone)) throw Error("user already exist given phone!");
    return await User.create(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

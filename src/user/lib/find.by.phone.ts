import User from "../../../database/models/user";

export default async (phone: any) => {
  try {
    if (!phone) throw Error("params missing phone");

    return await User.findOne({
      where: {
        phone,
      },
      raw: true,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

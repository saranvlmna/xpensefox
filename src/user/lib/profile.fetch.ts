import User from "../../../database/models/user";
export default async (userId: any) => {
  try {
    if (!userId) throw Error("params missing userId");

    return await User.findOne({
      where: {
        id: userId,
      },
      raw: true,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

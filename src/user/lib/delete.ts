import User from "../../../database/models/user";

export default async (userId: any) => {
  try {
    if (!userId) throw Error("params missing userId");

    return await User.destroy({
      where: {
        id: userId,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

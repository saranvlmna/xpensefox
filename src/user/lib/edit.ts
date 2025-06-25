import User from "../../../database/models/user";

export default async (data: any) => {
  try {
    if (!data.userId) throw Error("params missing userId");

    return await User.update(data, {
      where: {
        id: data.userId,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

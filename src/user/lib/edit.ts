import User from "../../../database/models/user";
export default async (data: any) => {
  if (!data.userId) throw Error("params missing userId");
  return await User.update(data, {
    where: {
      id: data.userId,
    },
  });
};

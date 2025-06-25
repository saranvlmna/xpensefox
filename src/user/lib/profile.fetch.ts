import User from "../../../database/models/user";
export default async (userId: any) => {
  if (!userId) throw Error("params missing userId");
  return await User.findOne({
    where: {
      id: userId,
    },
    raw: true,
  });
};

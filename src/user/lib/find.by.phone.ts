import User from "../../../database/models/user";

export default async (phone: any) => {
  return await User.findOne({
    where: {
      phone,
    },
    raw: true,
  });
};

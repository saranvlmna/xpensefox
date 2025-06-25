export default async (data: any) => {
  if (!data.phone || !data.password) throw Error("params missing");
  let user: any;
  user =
    (await this.findUserByPhone(data.phone)) ||
    (() => {
      throw new Error("User does not exist");
    })();
  (await hashService.compareHash(data.password, user.password))
    ? true
    : (() => {
        throw new Error("Wrong Password");
      })();
  return hashService.getToken(user);
};

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const saltRounds = 10;
const secretKey = "sdfaasfasdfasdfasfsdfasdf";

export class HashService {
  constructor() {}

  async genHash(string: any) {
    return bcrypt.hash(string, saltRounds);
  }

  async compareHash(string: any, hash: any) {
    return bcrypt.compare(string, hash);
  }

  getToken(data: any) {
    return jwt.sign(JSON.stringify(data), secretKey);
  }

  verifyToken(token: any) {
    return jwt.verify(token, secretKey);
  }
}

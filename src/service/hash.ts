const bcrypt = require("bcrypt");
const saltRounds = 10;

export class HashService {
  constructor() {}

  genHash(string: any) {
    return bcrypt.hash(string, saltRounds);
  }

  compareHash(string: any, hash: any) {
    return bcrypt.compare(string, hash);
  }
}

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
import {Sequelize} from "sequelize";
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

async function connectionEstablish() {
  try {
    await sequelize.authenticate();
    console.log(`[database] ${config.database} successfully connnected`);
  } catch (error) {
    console.error(`[database] ${config.database} unable to connect ${error}`);
  }
}
connectionEstablish();

export {sequelize};

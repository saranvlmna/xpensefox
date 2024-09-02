import {Sequelize} from "sequelize";
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  logging: false,
});

import Xpense from "./xpense";
import XpenseCard from "./xpense_card";

// Initialize models
const models = {
  Xpense,
  XpenseCard,
};

// Define a type for the models
type Models = {
  Xpense: typeof Xpense;
  XpenseCard: typeof XpenseCard;
};

Object.keys(models).forEach((modelName) => {
  const model = models[modelName as keyof Models];
  if (model.associate) {
    model.associate(models);
  }
});

async function connectionEstablish() {
  try {
    await sequelize.authenticate();
    console.log(`[database] ${config.database} successfully connected`);
  } catch (error) {
    console.error(`[database] ${config.database} unable to connect: ${error}`);
  }
}
connectionEstablish();

export {models, sequelize};

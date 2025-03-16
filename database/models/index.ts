import {Sequelize} from "sequelize";

const database = process.env.DB_NAME || "";
const username = process.env.DB_USER_NAME || "";
const password = process.env.DB_PASSWOR || "";
const host = process.env.DB_HOST || "";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: "postgres",
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
    console.log(`[database] ${database} successfully connected`);
  } catch (error) {
    console.error(`[database] ${database} unable to connect: ${error}`);
  }
}
connectionEstablish();

export {models, sequelize};

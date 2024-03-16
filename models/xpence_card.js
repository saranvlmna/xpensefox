"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class XpenceCards extends Model {
    static associate(models) {}
  }
  XpenceCards.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      created_month: DataTypes.STRING,
      budget: DataTypes.STRING,
      color: DataTypes.STRING,
      is_active: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "xpence_cards",
    },
  );
  return XpenceCards;
};

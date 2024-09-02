import {DataTypes, Model, UUIDV4} from "sequelize";
import {sequelize} from "./index";

class XpenseCard extends Model {
  static associate(models: any) {
    XpenseCard.hasMany(models.Xpense, {foreignKey: "cardId"});
  }
}

XpenseCard.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    budget: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "XpenseCard",
    tableName: "xpense_cards",
  },
);

export default XpenseCard;

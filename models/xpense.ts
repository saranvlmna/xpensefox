import {DataTypes, Model, UUIDV4} from "sequelize";
import {sequelize} from "./index";
import User from "./user";

class Xpense extends Model {
  static associate(models: {User: typeof User}) {
    this.belongsTo(models.User, {foreignKey: "userId"});
  }
}

Xpense.init(
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
    cardId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Xpense",
    tableName: "xpense",
  },
);

export default Xpense;

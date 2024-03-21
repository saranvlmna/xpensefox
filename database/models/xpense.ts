import {DataTypes, Model, UUIDV4} from "sequelize";
import {sequelize} from "./index";

class Xpense extends Model {
  // static associate(models: any) {
  //   this.belongsTo(models.User, {foreignKey: "userId"});
  //   this.belongsTo(models.XpenseCard, {foreignKey: "cardId"});
  // }
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

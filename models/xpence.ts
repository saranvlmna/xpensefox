import {DataTypes, Model, UUIDV4} from "sequelize";
import {sequelize} from "./index";
import User from "./user";

class Xpense extends Model {
  public id!: string;
  public userId!: string;
  public cardId!: string;
  public amount!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
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

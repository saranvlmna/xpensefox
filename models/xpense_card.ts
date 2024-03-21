import {DataTypes, Model, UUIDV4} from "sequelize";
import {sequelize} from "./index";
import User from "./user";

interface xpenseCardAttributes {
  id: string;
  name: string;
  budget: string;
  userId: string;
  is_active: boolean;
}

interface xpenseCardCreationAttributes extends Omit<xpenseCardAttributes, "id"> {}

class xpenseCard extends Model<xpenseCardAttributes, xpenseCardCreationAttributes> implements xpenseCardAttributes {
  public id!: string;
  public name!: string;
  public budget!: string;
  public userId!: string;
  public is_active!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  static associate(models: {User: typeof User}) {
    this.belongsTo(models.User, {foreignKey: "userId"});
  }
}

xpenseCard.init(
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
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "xpenseCard",
    tableName: "xpense_cards",
  },
);

export default xpenseCard;

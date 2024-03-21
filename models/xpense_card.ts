import {DataTypes, Model, UUIDV4} from "sequelize";
import {sequelize} from "./index";

interface xpenseCardAttributes {
  id: string;
  name: string;
  created_month: string;
  budget: string;
  color: string;
  is_active: boolean;
}

interface xpenseCardCreationAttributes extends Omit<xpenseCardAttributes, "id"> {}

class xpenseCard extends Model<xpenseCardAttributes, xpenseCardCreationAttributes> implements xpenseCardAttributes {
  public id!: string;
  public name!: string;
  public created_month!: string;
  public budget!: string;
  public color!: string;
  public is_active!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

xpenseCard.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_month: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    budget: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
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

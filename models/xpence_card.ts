import {DataTypes, Model, UUIDV4} from "sequelize";
import {sequelize} from "./index";

interface XpenceCardAttributes {
  id: string;
  name: string;
  created_month: string;
  budget: string;
  color: string;
  is_active: boolean;
}

interface XpenceCardCreationAttributes extends Omit<XpenceCardAttributes, "id"> {}

class XpenceCard extends Model<XpenceCardAttributes, XpenceCardCreationAttributes> implements XpenceCardAttributes {
  public id!: string;
  public name!: string;
  public created_month!: string;
  public budget!: string;
  public color!: string;
  public is_active!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

XpenceCard.init(
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
    modelName: "XpenceCard",
    tableName: "xpence_cards",
  },
);

export default XpenceCard;

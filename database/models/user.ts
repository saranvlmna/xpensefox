import {DataTypes, Model, UUIDV4} from "sequelize";
import {sequelize} from "./index";

class User extends Model {
  // static associate(models: any) {
  //   this.hasMany(models.XpenseCard, {foreignKey: "userId"});
  // }
}

User.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  },
);

export default User;

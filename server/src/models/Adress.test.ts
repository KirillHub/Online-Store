import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
// import UserTest from './UserTest.js';
import { sequelize } from '../database/createConnection.js';

/*
class AddressTest extends Model<
  InferAttributes<AddressTest>,
  InferCreationAttributes<AddressTest>
> {
  declare userId: ForeignKey<UserTest['id']>;
  declare address: string;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}


export default AddressTest;
*/

/*
AddressTest.init(
  {
    address: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'address',
    sequelize,
  }
);
*/

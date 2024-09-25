import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/connection';

class MAEMED1 extends Model {}

MAEMED1.init({
  MMCODM: {
    type: DataTypes.STRING,
  },
  MMNOMB: {
    type: DataTypes.STRING,
  },
  MMESPC: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'MAEMED1',
  tableName: 'MAEMED1',
});

export default MAEMED1;

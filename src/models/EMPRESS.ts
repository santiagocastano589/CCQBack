import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/connection';

class EMPRESS extends Model {}

EMPRESS.init({
  MEcntr: {
    type: DataTypes.STRING,
  },
  EMPNOMB: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'EMPRESS',
  tableName: 'EMPRESS',
});

export default EMPRESS;

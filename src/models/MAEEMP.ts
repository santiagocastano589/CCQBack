import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/connection';

class MAEEMP extends Model {}

MAEEMP.init({
  MENNIT: {
    type: DataTypes.STRING,
  },
  MEcntr: {
    type: DataTypes.STRING,
  },
  MEname: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'MAEEMP',
  tableName: 'MAEEMP',
});

export default MAEEMP;

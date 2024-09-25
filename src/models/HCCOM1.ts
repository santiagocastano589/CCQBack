import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/connection';

class HCCOM1 extends Model {}

HCCOM1.init({
  HISCKEY: {
    type: DataTypes.STRING,
  },
  HISTipDoc: {
    type: DataTypes.STRING,
  },
  HISCSEC: {
    type: DataTypes.STRING,
  },
  HISCLPR: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'HCCOM1',
  tableName: 'HCCOM1',
});

export default HCCOM1;

import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/connection';

class HCCOM5 extends Model {}

HCCOM5.init({
  HISCKEY: {
    type: DataTypes.STRING,
  },
  HCPrcCod: {
    type: DataTypes.STRING,
  },
  HISCSEC: {
    type: DataTypes.STRING,
  },
  HisCpObs: {
    type: DataTypes.STRING,
  },
  HisCPCan: {
    type: DataTypes.INTEGER,
  }
}, {
  sequelize,
  modelName: 'HCCOM5',
  tableName: 'HCCOM5',
});

export default HCCOM5;
